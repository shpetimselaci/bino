import React from "react";
import {Button} from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button variant="default">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="destructive">Success</Button>;
export const Danger = () => <Button variant="link">Danger</Button>;

export const Template = (args: any) => <Button {...args} />;