import type { Meta, StoryObj } from "@storybook/react";

import Simple from ".";

export default {
  title: "Footer/Links/Simple",
  component: Simple,
} as Meta<typeof Simple>;

type Story = StoryObj<typeof Simple>;

export const Default: Story = {
  args: {
    links: [
      {
        label: "Hello World",
        href: "/"
      },
    ],
  },
};
