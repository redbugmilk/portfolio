import React from "react";

import { CustomButton } from "./Button";

export default {
  title: "Button",
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  size: "small",
  variant: "contained",
  color: "primary",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
