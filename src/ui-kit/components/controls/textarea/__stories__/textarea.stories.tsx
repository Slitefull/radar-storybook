import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea from "../index";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";


export default {
  title: "inputs/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder",
  helperText: "Error",
  disabled: false,
  label: "Label",
  labelColor: PRIMARY_60,
  labelPosition: "top",
  onChange: () => console.log("change"),
  tooltip: <div>Tooltip text</div>,
};

Default.argTypes = {
  placeholder: {
    name: "placeholder",
    table: {
      type: { summary: "Placeholder for textarea" },
      defaultValue: {
        summary: false,
      },
    },
  },
  helperText: {
    name: "helperText",
    table: {
      type: { summary: "Helper text for error/warning/success" },
      defaultValue: {
        summary: "error",
      },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is textarea is disabled" },
      defaultValue: {
        summary: false,
      },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Input`s label" },
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
  tooltip: {
    name: "tooltip",
    table: {
      type: { summary: "Textarea`s tooltip" },
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1505%3A3905",
  },
}
