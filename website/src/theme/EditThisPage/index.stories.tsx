import type { Meta, StoryObj } from "@storybook/react";

import EditThisPage from ".";

export default {
  title: "EditThisPage",
  component: EditThisPage,
} as Meta<typeof EditThisPage>;

type Story = StoryObj<typeof EditThisPage>;

export const Default: Story = {
  args: {
    editUrl: "/edit"
  },
};
