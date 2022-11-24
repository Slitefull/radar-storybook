import { ComponentMeta, ComponentStory } from "@storybook/react";
import { mockDropdownData } from "../__mock__/data";
import CalendarIcon from "@/ui-kit/customized-icons/calendar";
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


export default {
  title: "dropdowns/With Types",
  component: DropdownWithTypes,
} as ComponentMeta<typeof DropdownWithTypes>;

const Template: ComponentStory<typeof DropdownWithTypes> = (args) => <DropdownWithTypes {...args}/>;

export const Default = Template.bind({});
Default.args = {
  types: [],
  options: mockDropdownData,
  closeMenuOnSelect: false,
  hideSelectedOptions: true,
  placeholder: "placeholder",
  isDisabled: false,
  onChange: (value) => console.log(value, "value"),
  defaultValue: { value: "purple", label: "Purple" },
  icon: <CalendarIcon size={20}/>,
  label: "Label",
  labelPosition: "top",
  labelColor: PLUMP_PURPLE,
  width: "fit-content",
};

Default.argTypes = {
  types: {
    name: "type",
    options: ["searchable", "multi"],
    control: { type: "check" },
    table: {
      type: { summary: "Array of options that populate the select menu" },
      defaultValue: {
        summary: `[
          { value: "purple", label: "Purple" }
        ]`
      },
    },
  },
  options: {
    name: "options",
    table: {
      type: { summary: "Array of options that populate the select menu" },
      defaultValue: {
        summary: `[
          { value: "purple", label: "Purple" }
        ]`
      },
    },
  },
  closeMenuOnSelect: {
    name: "closeMenuOnSelect",
    table: {
      type: { summary: "Close the select menu when the user selects an option" },
      defaultValue: { summary: false },
    },
  },
  hideSelectedOptions: {
    name: "hideSelectedOptions",
    table: {
      type: { summary: "Hide the selected option from the menu" },
      defaultValue: { summary: true },
    },
  },
  icon: {
    name: "icon",
    table: {
      type: { summary: "Dropdown icon" },
    },
  },
  placeholder: {
    name: "placeholder",
    table: {
      type: { summary: "Set input`s placeholder" },
      defaultValue: { summary: "placeholder" },
    },
  },
  isDisabled: {
    name: "isDisabled",
    table: {
      type: { summary: "Set is disabled input" },
      defaultValue: { summary: false },
    },
  },
  onChange: {
    name: "onChange",
    table: {
      type: { summary: "On change input handler" },
    },
  },
  defaultValue: {
    name: "defaultValue",
    table: {
      type: { summary: "Default value of the input" }
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Set label for the select" },
      defaultValue: { summary: `Label` },
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
  width: {
    name: "width",
    table: {
      type: { summary: "Width of the dropdown" },
      defaultValue: { summary: "fit-content" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Dropdown with types",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1505%3A3905",
  },
}
