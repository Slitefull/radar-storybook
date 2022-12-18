import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../index";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";


export default {
  title: "labels/Default",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}>Label</Label>;

export const Default = Template.bind({});

Default.args = {
  type: "primary",
  color: PRIMARY_60,
  size: "default",
  weight: "default",
  position: "left",
  disabled: false,
  cursor: "default",
  margin: "0px",
  $wrap: false,
  onClick: () => {
  },
};

Default.argTypes = {
  type: {
    name: "type",
    options: ["primary", "secondary"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set type for the label" },
      defaultValue: {
        summary: "primary",
      },
    },
  },
  color: {
    name: "color",
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
  weight: {
    name: "weight",
    options: ["default", "bold"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set weight for the label" },
      defaultValue: {
        summary: "default",
      },
    },
  },
  position: {
    name: "position",
    options: ["top", "right", "bottom", "left"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set position of the label" },
      defaultValue: {
        summary: "left",
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
  margin: {
    name: "margin",
    table: {
      type: { summary: "Set margin for the label" },
      defaultValue: {
        summary: "0",
      },
    },
  },
  $wrap: {
    name: "wrap",
    table: {
      type: { summary: "Set is label can wrap text" },
      defaultValue: {
        summary: false,
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
