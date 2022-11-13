import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioGroup from "../radio-group";
import Meridian from "@/ui-kit/components/inputs/meridian/meridian";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


export default {
  title: "inputs/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <Meridian
      name={"meridian"}
      label={"AM"}
      onChange={() => console.log("qwe")}
    />
    <Meridian
      name={"meridian"}
      label={"PM"}
      onChange={() => console.log("qwe")}
    />
  </RadioGroup>
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
