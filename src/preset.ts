import { resolve } from "path";
import { existsSync } from "fs";
import type { StorybookConfig } from "@storybook/core-common";
import AliasPlugin from "enhanced-resolve/lib/AliasPlugin";
import { RuleSetRule, RuleSetUseItem } from "webpack";

const root = process.cwd();
const resolveDocusaurus = (...paths: string[]) =>
  resolve(root, "node_modules", "@docusaurus", ...paths);

const docusaurusDepsPath = resolveDocusaurus();
if (!existsSync(docusaurusDepsPath)) {
  throw new Error(`Docusaurus dependencies not found at ${docusaurusDepsPath}`);
}

export const webpackFinal: StorybookConfig["webpackFinal"] = (config) => {
  const themePaths = {
    local: resolve(root, "src", "theme"),
    classic: resolveDocusaurus("theme-classic", "lib", "theme"),
    debug: resolveDocusaurus("plugin-debug", "lib", "theme"),
    fallback: resolveDocusaurus("core", "lib", "client", "theme-fallback"),
  };

  const commonThemePaths = [
    themePaths.classic,
    themePaths.debug,
    themePaths.fallback,
  ];

  config.resolve!.plugins = [
    new AliasPlugin(
      "described-resolve",
      [
        {
          name: "@theme-original",
          alias: [
            // TODO - support paths provided by plugins
            ...commonThemePaths,
          ],
        },
        {
          name: "@theme-init",
          alias: commonThemePaths,
        },
        {
          name: "@theme",
          alias: [
            themePaths.local,
            // TODO - support paths provided by plugins
            ...commonThemePaths,
          ],
        },
      ],
      "resolve"
    ),
  ];

  config.resolve!.alias = {
    ...config.resolve!.alias,
    "@site": root,
    // This isn't in the theme-common default export?
    "@docusaurus/theme-common/Details": resolveDocusaurus(
      "theme-common",
      "lib",
      "components",
      "Details"
    ),
    "@docusaurus/theme-common": resolveDocusaurus("theme-common", "lib"),
    "@docusaurus/utils-common": resolveDocusaurus("utils-common", "lib"),
    "@docusaurus/plugin-content-docs": resolveDocusaurus(
      "plugin-content-docs",
      "lib"
    ),
    "@docusaurus": resolveDocusaurus("core", "lib", "client", "exports"),
    "@generated": resolve(root, ".docusaurus"),
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

  const cssRules: RuleSetRule[] = [];
  const rules = (config.module!.rules as RuleSetRule[]).map((rule) => {
    switch (rule.test!.toString()) {
      case "/\\.css$/": {
        cssRules.push(JSON.parse(JSON.stringify(rule)));

        return {
          ...rule,
          exclude: /\.module\.css$/,
        };
      }
      case "/\\.(mjs|tsx?|jsx?)$/": {
        return {
          ...rule,
          // Keep Docusaurus files intact
          exclude: /node_modules\/(?!@docusaurus)/,
        };
      }
      default: {
        return rule;
      }
    }
  });

  cssRules.forEach((rule) => {
    const moduleRule = {
      ...rule,
      test: /\.module\.css$/,
      use: ((rule.use as RuleSetUseItem[]) || []).map((use) => {
        if (typeof use === "object" && use.loader!.includes("/css-loader/")) {
          use.options = {
            ...((use.options || {}) as Record<string, any>),
            modules: true,
          };
        }

        return use;
      }),
    };

    rules.push(moduleRule);
  });

  return {
    ...config,
    module: {
      ...config.module,
      rules,
    },
  };
};

export function config(entry = []) {
  return [
    ...entry,
    resolve(
      process.cwd(),
      "node_modules",
      "infima",
      "dist",
      "css",
      "default",
      "default.css"
    ),
    resolve(
      process.cwd(),
      "node_modules",
      "@docusaurus",
      "theme-classic",
      "lib",
      "admonitions.css"
    ),
  ];
}
