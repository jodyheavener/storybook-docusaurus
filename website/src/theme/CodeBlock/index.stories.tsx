import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CodeBlock from '.';

export default {
  title: 'CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CodeBlock>;

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;

export const Default = Template.bind({});
