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
    size: "small",
    label: "Input",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Input",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Input",
  },
};
