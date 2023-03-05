import type { Configuration, RuleSetRule } from "webpack";
import createClientConfig from "@docusaurus/core/lib/webpack/client";
import { applyConfigureWebpack } from "@docusaurus/core/lib/webpack/utils";
import { loadClientModules } from "@docusaurus/core/lib/server/clientModules";
import { load } from "@docusaurus/core/lib/server";
import type { LoadedPlugin, Props } from "@docusaurus/types";
import { logger } from "@storybook/node-logger";

let docusaurusData: Props;

const loadDocusaurus = async () => {
  docusaurusData =
    docusaurusData ||
    (await load({
      siteDir: process.cwd(),
    }));

  return docusaurusData;
};

const ruleMatches = (rule: RuleSetRule, ...inputs: string[]) =>
  inputs.some((input) => "test" in rule && (rule.test as RegExp).test(input));

const hasPlugin = (plugins: LoadedPlugin[], name: string) =>
  plugins.map((plugin) => plugin.name).includes(name);

const log = (message: string) => logger.info(`Docusaurus: ${message}`);

const config = async (entry: string[] = []) => {
  const { plugins } = await loadDocusaurus();

  const clientModulePlugins = plugins.filter(
    (plugin) => "getClientModules" in plugin
  );
  if (clientModulePlugins.length > 0) {
    log(
      `adding client modules from the following plugins: ${clientModulePlugins
        .map((p) => p.name)
        .join(", ")}`
    );
  }

  const clientModules = loadClientModules(clientModulePlugins);

  return [...entry, ...clientModules];
};

const webpackFinal = async (config: Configuration): Promise<Configuration> => {
  const props = await loadDocusaurus();

  // Load up the Docusaurus client Webpack config,
  // so we can extract its aliases and rules
  const docusaurusConfig = await createClientConfig(props);

  const alias = {
    ...config.resolve!.alias,
    ...docusaurusConfig.resolve!.alias,
  };

  const rules = (config.module!.rules as RuleSetRule[])
    .map((rule) => {
      if (ruleMatches(rule, ".svg")) {
        log("preferring Docusaurus SVG loader over Storybook");
        return {
          ...rule,
          exclude: /\.svg$/,
        };
      }

      if (
        hasPlugin(props.plugins, "docusaurus-plugin-sass") &&
        ruleMatches(rule, ".module.scss")
      ) {
        log("preferring docusaurus-plugin-sass over Storybook SASS loader");
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
    ...config,
    resolve: {
      ...config.resolve,
      roots: [
        ...(config.resolve!.roots || []),
        ...docusaurusConfig.resolve!.roots!,
      ],
      alias,
    },
    module: {
      ...config.module,
      rules,
    },
    plugins: [...config.plugins!, ...docusaurusConfig.plugins!],
  };

  // Allow plugins to make any final tweaks to the config
  const appliedWebpackConfigs: string[] = [];
  (props.plugins as LoadedPlugin[])
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
    log(
      `applying Webpack configs from the following Docusaurus plugins: ${appliedWebpackConfigs.join(
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

export { config, webpackFinal };
