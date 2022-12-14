import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../index";


export default {
  title: "buttons/Custom",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  size: "default",
  rounded: false,
  disabled: false,
  onClick: () => console.log("click"),
};

Default.argTypes = {
  color: {
    name: "color",
    options: ["primary", "secondary", "ghost"],
    control: { type: "radio" },
    table: {
      type: { summary: "Button types" },
      defaultValue: { summary: "primary" },
    },
  },
  size: {
    name: "size",
    options: ["default", "small"],
    control: { type: "radio" },
    table: {
      type: { summary: "Button sizes" },
      defaultValue: { summary: "default" },
    },
  },
  rounded: {
    name: "rounded",
    table: {
      type: { summary: "Set is button rounded" },
      defaultValue: { summary: false },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is button disabled" },
      defaultValue: { summary: false },
    },
  },
  onClick: {
    name: "onClick",
    table: {
      type: { summary: "Set is button rounded" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Default button with 3 colors and 2 sizes.",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
};

