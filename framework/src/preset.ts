import type { Configuration, RuleSetRule } from "webpack";
import { load } from "@docusaurus/core/lib/server";
import createClientConfig from "@docusaurus/core/lib/webpack/client";
import { applyConfigureWebpack } from "@docusaurus/core/lib/webpack/utils";
import { loadClientModules } from "@docusaurus/core/lib/server/clientModules";
import type { LoadedPlugin, Props } from "@docusaurus/types";
import { logger } from "@storybook/node-logger";
import { type StorybookConfig, type FrameworkOptions } from "./types";
import { join } from "path";

export {
  addons,
  frameworkOptions,
  core,
  webpack,
} from "@storybook/react-webpack5/preset";

const ruleMatches = (rule: RuleSetRule, ...inputs: string[]) =>
  inputs.some((input) => "test" in rule && (rule.test as RegExp).test(input));

const filterPlugins = (
  plugins: LoadedPlugin[],
  ignoredPlugins: string[]
): LoadedPlugin[] => plugins.filter((p) => !ignoredPlugins.includes(p.name));

const getFrameworkOption = <TName extends keyof FrameworkOptions>(
  frameworkConfig: StorybookConfig["framework"],
  optionName: TName,
  fallback: FrameworkOptions[TName]
): FrameworkOptions[TName] =>
  (typeof frameworkConfig === "object" &&
    frameworkConfig.options[optionName]) ||
  fallback;

let docusaurusData: Props;

const loadDocusaurus = async () => {
  docusaurusData =
    docusaurusData ||
    (await load({
      siteDir: process.cwd(),
    }));

  return docusaurusData;
};

const previewAnnotations: NonNullable<StorybookConfig["previewAnnotations"]> =
  async (entry: string[] = [], options) => {
    const frameworkConfig = await options.presets.apply<
      StorybookConfig["framework"]
    >("framework");

    const props = await loadDocusaurus();
    const plugins = filterPlugins(
      props.plugins,
      getFrameworkOption(frameworkConfig, "ignorePlugins", [])
    );

    const clientModules = loadClientModules(plugins);
    
    if (clientModules.length > 0) {
      logger.info(
        `(Docusaurus) Adding ${clientModules.length} client modules to preview frame`
      );
    }

    const preview = require.resolve(join(__dirname, "preview"));

    return [...entry, ...clientModules, preview];
  };

const webpackFinal: NonNullable<StorybookConfig["webpackFinal"]> = async (
  baseConfig,
  options
) => {
  const frameworkConfig = await options.presets.apply<
    StorybookConfig["framework"]
  >("framework");

  const props = await loadDocusaurus();
  const plugins = filterPlugins(
    props.plugins,
    getFrameworkOption(frameworkConfig, "ignorePlugins", [])
  );

  const hasPlugin = (name: string) =>
    plugins.map((plugin) => plugin.name).includes(name);

  // Load up the Docusaurus client Webpack config,
  // so we can extract its aliases and rules
  const docusaurusConfig = await createClientConfig(props);

  const webpackAlias = {
    ...baseConfig.resolve!.alias,
    ...docusaurusConfig.resolve!.alias,
  };

  const rules = (baseConfig.module!.rules as RuleSetRule[])
    .map((rule) => {
      if (ruleMatches(rule, ".svg")) {
        logger.info("(Docusaurus) Preferring SVG loader over Storybook");
        return {
          ...rule,
          exclude: /\.svg$/,
        };
      }

      if (
        hasPlugin("docusaurus-plugin-sass") &&
        ruleMatches(rule, ".module.scss")
      ) {
        logger.info(
          "(Docusaurus) Preferring docusaurus-plugin-sass over Storybook SASS loader"
        );
        return null;
      }

      return rule;
    })
    .filter(Boolean) as RuleSetRule[];

  rules.push(
    // Use the rules defined by Docusaurus for SVGs and JS
    ...(docusaurusConfig.module!.rules as RuleSetRule[]).filter((rule) =>
      ruleMatches(rule, ".svg", ".js", ".woff")
    )
  );

  let finalConfig: Configuration = {
    ...baseConfig,
    resolve: {
      ...baseConfig.resolve,
      roots: [
        ...(baseConfig.resolve!.roots || []),
        ...docusaurusConfig.resolve!.roots!,
      ],
      alias: webpackAlias,
    },
    module: {
      ...baseConfig.module,
      rules,
    },
    plugins: [...baseConfig.plugins!, ...docusaurusConfig.plugins!],
  };

  // Allow plugins to make any final tweaks to the config
  const appliedWebpackConfigs: string[] = [];
  plugins
    .filter((plugin) => "configureWebpack" in plugin)
    .forEach((plugin) => {
      finalConfig = applyConfigureWebpack(
        plugin.configureWebpack!.bind(plugin),
        finalConfig,
        false,
        props.siteConfig.webpack?.jsLoader,
        plugin.content
      );
      appliedWebpackConfigs.push(plugin.name);
    });

  if (appliedWebpackConfigs.length > 0) {
    logger.info(
      `(Docusaurus) Applying Webpack configs from the following plugins: ${appliedWebpackConfigs.join(
        ", "
      )}`
    );
  }

  // For some reason I've run into `exclude` properties
  // with undefined values, so let's filter those out
  finalConfig.module!.rules = (finalConfig.module!.rules as RuleSetRule[]).map(
    (rule) => {
      if (rule.exclude && Array.isArray(rule.exclude)) {
        rule.exclude = rule.exclude.filter(Boolean);
      }

      return rule;
    }
  );

  return finalConfig;
};

export { previewAnnotations, webpackFinal };
