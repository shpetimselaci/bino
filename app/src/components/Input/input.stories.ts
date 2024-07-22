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

};

export const Medium: Story = {

};

export const Large: Story = {

};
