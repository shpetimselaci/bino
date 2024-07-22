import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,

  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: 'sm'
  }
};

export const Medium: Story = {
  args: {
    variant: 'default'
  }
};

export const Large: Story = {
  args: {
    variant: 'lg'
  }
};
