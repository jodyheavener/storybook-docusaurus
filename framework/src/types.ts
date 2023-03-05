import type { StorybookConfig as StorybookConfigBase } from "@storybook/preset-react-webpack";
import type { StorybookConfigWebpack } from "@storybook/builder-webpack5";

import type {
  FrameworkOptions as ReactFrameworkOptions,
  StorybookConfig as ReactStorybookConfig,
} from "@storybook/react-webpack5";

type FrameworkName = "storybook-framework-docusaurus";

export type FrameworkOptions = ReactFrameworkOptions & {
  ignoreWebpackConfigs: string[];
  ignoreClientModules: string[];
};

type StorybookConfigFramework = {
  framework:
    | FrameworkName
    | {
        name: FrameworkName;
        options: FrameworkOptions;
      };
} & Pick<ReactStorybookConfig, "core" | "typescript">;

/**
 * The interface for Storybook configuration in `main.ts` files.
 */
export type StorybookConfig = Omit<
  StorybookConfigBase,
  keyof StorybookConfigWebpack | keyof StorybookConfigFramework
> &
  StorybookConfigWebpack &
  StorybookConfigFramework;
