import { ComponentMeta, ComponentStory } from "@storybook/react";
import { mockDropdownData } from "../__mock__/data";
import Dropdown from "@/ui-kit/components/controls/dropdown";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";


export default {
  title: "dropdowns/Default",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  options: mockDropdownData,
  isSearchable: false,
  closeMenuOnSelect: false,
  hideSelectedOptions: true,
  placeholder: "Search",
  disabled: false,
  rounded: false,
  defaultValue: { value: "option", label: "option" },
  label: "Label",
  labelPosition: "top",
  labelColor: PRIMARY_60,
  width: "fit-content",
};

Default.argTypes = {
  color: {
    name: "color",
    options: ["primary", "secondary", "ghost"],
    control: { type: "radio" },
    table: {
      type: { summary: "Dropdown color" },
      defaultValue: {
        summary: "primary"
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
  placeholder: {
    name: "placeholder",
    table: {
      type: { summary: "Set placeholder for select" },
      defaultValue: { summary: "Search" },
    },
  },
  isSearchable: {
    name: "isSearchable",
    table: {
      type: { summary: "Set is select is searchable" },
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
  rounded: {
    name: "rounded",
    table: {
      type: { summary: "Set is select rounded" },
      defaultValue: { summary: false },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is select disabled" },
      defaultValue: { summary: false },
    },
  },
  defaultValue: {
    name: "defaultValue",
    table: {
      type: { summary: "Set default value for the select" },
      defaultValue: { summary: `{ value: "option", label: "option" }` },
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
      component: "Default dropdown with 2 sizes and 3 colors",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
}
