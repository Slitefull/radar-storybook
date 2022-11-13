import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../label";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


export default {
  title: "labels/Default",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}>Label</Label>;

export const Default = Template.bind({});

Default.args = {
  color: PLUMP_PURPLE,
  size: "default",
  cursor: "default",
  disabled: false,
};

Default.argTypes = {
  color: {
    name: "color",
    control: { type: "radio" },
    table: {
      type: { summary: "Set color for the label" },
      defaultValue: {
        summary: "primary",
      },
    },
  },
  size: {
    name: "size",
    options: ["default", "small"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set size for the label" },
      defaultValue: {
        summary: "default",
      },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is label disabled" },
      defaultValue: {
        summary: false,
      },
    },
  },
  cursor: {
    name: "cursor",
    options: ["default", "pointer", "not-allowed"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set cursor for the label" },
      defaultValue: {
        summary: "default",
      },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Label for control elements with children",
    },
  },
};
