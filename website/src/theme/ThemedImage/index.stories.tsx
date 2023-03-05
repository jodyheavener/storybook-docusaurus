import type { Meta, StoryObj } from "@storybook/react";

import ThemedImage from ".";

export default {
  title: "ThemedImage",
  component: ThemedImage,
} as Meta<typeof ThemedImage>;

type Story = StoryObj<typeof ThemedImage>;

export const Default: Story = {
  args: {
    alt: "Storybook logo",
    sources: {
      light: "img/storybook-light.svg",
      dark: "img/storybook-dark.svg",
    },
  },
};
