import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";
import SearchIcon from "@/ui-kit/customized-icons/search";
import Input from "../index";


export default {
  title: "inputs/Text",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  onChange: () => console.log("change"),
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
  helperText: "Error",
  placeholder: "Placeholder",
  disabled: false,
  icon: <SearchIcon size={15}/>,
  iconPosition: "left",
  value: "",
  label: "Label",
  labelColor: PRIMARY_60,
  labelPosition: "top",
  tooltip: <div>Tooltip text</div>,
  width: "fit-content",
  inputSize: "default",
};

Default.argTypes = {
  type: {
    name: "type",
    options: ["date", "datetime-local", "month", "number", "password", "text", "time", "week"],
    control: { type: "radio" },
    table: {
      type: { summary: "Type of the input" },
      defaultValue: {
        summary: "text",
      },
    },
  },
  onChange: {
    name: "onChange",
    table: {
      type: { summary: "On change input handler" },
    },
  },
  onFocus: {
    name: "onFocus",
    table: {
      type: { summary: "On focus input handler" },
    },
  },
  onBlur: {
    name: "onBlur",
    table: {
      type: { summary: "On blur input handler" },
    },
  },
  placeholder: {
    name: "placeholder",
    table: {
      type: { summary: "Placeholder for input" },
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
      type: { summary: "Set is field is disabled" },
      defaultValue: {
        summary: false,
      },
    },
  },
  icon: {
    name: "icon",
    table: {
      type: { summary: "Set icon for the input" },
      defaultValue: {
        summary: "<SearchIcon/>",
      },
    },
  },
  iconPosition: {
    name: "iconPosition",
    options: ["left", "right"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set position for the icon" },
      defaultValue: {
        summary: "start",
      },
    },
  },
  value: {
    name: "value",
    table: {
      type: { summary: "Set value for input" },
      defaultValue: {
        summary: "",
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
      type: { summary: "Input`s tooltip" },
    },
  },
  width: {
    name: "width",
    table: {
      type: { summary: "Input`s width" },
    },
  },
  inputSize: {
    name: "inputSize",
    options: ["default", "small"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set size of the input" },
      defaultValue: {
        summary: "default",
      },
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1505%3A3905",
  },
}
