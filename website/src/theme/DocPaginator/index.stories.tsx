import type { Meta, StoryObj } from "@storybook/react";

import DocPaginator from ".";

export default {
  title: "DocPaginator",
  component: DocPaginator,
} as Meta<typeof DocPaginator>;

type Story = StoryObj<typeof DocPaginator>;

export const Default: Story = {
  args: {
    previous: {
      title: "Previous",
      permalink: "/previous",
    },
    next: {
      title: "Next",
      permalink: "/next",
    },
  },
};
