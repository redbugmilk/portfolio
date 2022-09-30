import React from "react";
import CustomButton from "./Button";

export default {
  title: "Button",
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  size: "small",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  color: "secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Contained = Template.bind({});
Contained.args = {
  label: "Button",
  variant: "contained",
};

export const Text = Template.bind({});
Text.args = {
  label: "Button",
  variant: "text",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Button",
  variant: "outlined",
};
