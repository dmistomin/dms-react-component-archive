import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    textColor: { control: 'color' }
  }
};

type Story = StoryObj<typeof Button>;

export default meta;

export const Primary: Story = {
  args: {
    label: 'Primary 😃',
    size: 'large',
    primary: true,
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
    label: 'Secondary 😇'
  }
};
