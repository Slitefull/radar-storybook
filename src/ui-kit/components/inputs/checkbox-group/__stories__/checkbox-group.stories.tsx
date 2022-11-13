import { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox from "@/ui-kit/components/inputs/checkbox/checkbox";
import CheckboxGroup from "../checkbox-group";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


export default {
  title: "inputs/CheckboxGroup",
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox checked={false}/>
    <Checkbox checked={true}/>
    <Checkbox checked={false}/>
    <Checkbox checked={true}/>
  </CheckboxGroup>
);

export const Default = Template.bind({});
Default.args = {
  direction: "row",
  gap: 0,
  label: "Label",
  labelPosition: "top",
  labelColor: PLUMP_PURPLE,
};

Default.argTypes = {
  direction: {
    name: "direction",
    options: ["row", "column"],
    control: { type: "radio" },
    table: {
      type: { summary: "Direction of the radio group" },
      defaultValue: { summary: "row" },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Set label for the radio group" },
      defaultValue: {
        summary: false,
      },
    },
  },
  gap: {
    name: "gap",
    table: {
      type: { summary: "Set gap for radios" },
      defaultValue: {
        summary: false,
      },
    },
  },
  labelPosition: {
    name: "labelPosition",
    options: ["top", "right", "bottom", "left"],
    control: { type: "radio" },
    table: {
      type: { summary: "Position of the label" },
      defaultValue: { summary: "top" },
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
};

Default.parameters = {};
