import React from "react";
import { Primary } from "../Button/Button.stories";
import { Input } from "../Input/Input";

export default {
  title: "form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <Primary />
    <Input label="Placeholder" size="large" />
  </>
);
