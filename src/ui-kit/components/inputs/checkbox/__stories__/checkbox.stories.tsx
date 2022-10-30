import { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox from "../checkbox";


export default {
  title: "inputs/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

//TODO UPDATE
Default.args = {
  checked: false,
  name: "name",
  disabled: false,
  label: "Label",
  labelPosition: "left",
  labelColor: "primary",
  subtitle: "Subtitle",
  subtitleColor: "ghost",
  subtitleSize: "default",
  onChange: () => console.log("change")
};

Default.argTypes = {
  checked: {
    name: "checked",
    table: {
      type: { summary: "Set is checkbox checked" },
      defaultValue: {
        summary: false,
      },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Checkbox label" },
      defaultValue: {
        summary: "Label",
      },
    },
  },
  labelPosition: {
    name: "labelPosition",
    options: ["top", "right", "bottom", "left"],
    control: { type: "radio" },
    table: {
      type: { summary: "Position of the label" },
      defaultValue: { summary: "left" },
    },
  },
  labelColor: {
    name: "labelColor",
    options: ["primary", "ghost", "subtly"],
    control: { type: "radio" },
    table: {
      type: { summary: "Color of the label" },
      defaultValue: { summary: "primary" },
    },
  },
  name: {
    name: "name",
    table: {
      type: { summary: "Checkbox name" },
      defaultValue: {
        summary: "name",
      },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is checkbox disabled" },
      defaultValue: {
        summary: false,
      },
    },
  },
  onChange: {
    name: "onChange",
    table: {
      type: { summary: "On change checkbox event" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Default checkbox",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=482%3A475",
  },
}
