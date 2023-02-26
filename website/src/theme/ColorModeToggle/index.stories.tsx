import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColorModeToggle from ".";

export default {
  title: "ColorModeToggle",
  component: ColorModeToggle,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ColorModeToggle>;

const Template: ComponentStory<typeof ColorModeToggle> = (args) => (
  <ColorModeToggle {...args} />
);

export const Default = Template.bind({});
