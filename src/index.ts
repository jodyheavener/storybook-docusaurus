import { resolve } from "path";
import { existsSync } from "fs";
import type { Configuration, RuleSetRule } from "webpack";
import { loadContext } from "@docusaurus/core/lib/server";
import { loadPlugins } from "@docusaurus/core/lib/server/plugins";
import { loadSiteMetadata } from "@docusaurus/core/lib/server/siteMetadata";
import { createBaseConfig } from "@docusaurus/core/lib/webpack/base";
import { getStyleLoaders } from "@docusaurus/core/lib/webpack/utils";
import { loadClientModules } from "@docusaurus/core/lib/server/clientModules";
import { getFileLoaderUtils } from "@docusaurus/utils/lib/webpackUtils";
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const CSS_MODULE_REGEX = /\.module\.css$/i;

const root = process.cwd();
const fileLoaderUtils = getFileLoaderUtils();
const loadDocusaurusData = async () => {
  const context = await loadContext({
    siteDir: root,
  });
  const { plugins } = await loadPlugins(context);
  return { context, plugins };
};

const docusaurusDepsPath = resolve(root, "node_modules", "@docusaurus");
if (!existsSync(docusaurusDepsPath)) {
  throw new Error(`Docusaurus dependencies not found at ${docusaurusDepsPath}`);
}

export const config = async (entry: string[] = []) => {
  const { plugins } = await loadDocusaurusData();

  // Load all the modules provided by plugins (like CSS files)
  const clientModules = loadClientModules(plugins);
  return [...entry, ...clientModules];
};

export const webpackFinal = async (
  config: Configuration
): Promise<Configuration> => {
  const { context, plugins } = await loadDocusaurusData();

  // Load up the Docusaurus client Webpack
  // config, so we can extract its aliases
  const docusaurusWebpackConfig = await createBaseConfig(
    {
      ...context,
      plugins,
      siteMetadata: await loadSiteMetadata({
        siteDir: root,
        plugins,
      }),
      routesPaths: [],
    },
    false
  );

  config.resolve!.alias = {
    ...config.resolve!.alias,
    ...docusaurusWebpackConfig.resolve!.alias,
    // Not sure how unstable this appeoach is
    ...[
      ["blog", "content-blog"],
      ["docs", "content-docs"],
      ["pages", "content-pages"],
      ["debug", "debug"],
    ].reduce((acc, [name, pluginSuffix]) => {
      acc[`~${name}`] = resolve(
        root,
        ".docusaurus",
        `docusaurus-plugin-${pluginSuffix}`
      );
      return acc;
    }, {}),
  };

  const rules = (config.module!.rules as RuleSetRule[]).map((rule) => {
    const testRegexp = rule.test as RegExp;
    switch (true) {
      case testRegexp.test(".css"): {
        return {
          ...rule,
          exclude: CSS_MODULE_REGEX,
        };
      }
      case testRegexp.test(".svg"): {
        return {
          ...rule,
          exclude: /\.svg$/,
        };
      }
      case testRegexp.test(".tsx") && testRegexp.test(".jsx"): {
        return {
          ...rule,
          exclude: /node_modules\/(?!@docusaurus)/,
        };
      }
      default: {
        return rule;
      }
    }
  });

  rules.push(
    {
      test: CSS_MODULE_REGEX,
      use: getStyleLoaders(false, {
        modules: {
          localIdentName: "[local]_[path][name]",
          exportOnlyLocals: false,
        },
        importLoaders: 1,
        sourceMap: false,
      }),
    },
    fileLoaderUtils.rules.svg()
  );

  (config.plugins || []).push(
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
      ignoreOrder: true,
    })
  );

  return {
    ...config,
    module: {
      ...config.module,
      rules,
    },
  };
};
