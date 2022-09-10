import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockDropdownData } from "../__mock__/data";
import CalendarIcon from "@/ui-kit/customized-icons/calendar/calendar";
import SelectWithTypes from "@/ui-kit/components/dropdowns/with-types/with-types";


export default {
  title: 'dropdowns/With Types',
  component: SelectWithTypes,
} as ComponentMeta<typeof SelectWithTypes>;

const Template: ComponentStory<typeof SelectWithTypes> = (args) => <SelectWithTypes {...args}/>;

export const Default = Template.bind({});
Default.args = {
  types: [],
  options: mockDropdownData,
  closeMenuOnSelect: false,
  hideSelectedOptions: true,
  icon: <CalendarIcon size={20}/>
};

Default.argTypes = {
  types: {
    name: "type",
    options: ["searchable", "multi"],
    control: { type: 'check' },
    table: {
      type: { summary: 'Array of options that populate the select menu' },
      defaultValue: {
        summary: `[
          { value: 'purple', label: 'Purple' }
        ]`
      },
    },
  },
  options: {
    name: 'options',
    table: {
      type: { summary: 'Array of options that populate the select menu' },
      defaultValue: {
        summary: `[
          { value: 'purple', label: 'Purple' }
        ]`
      },
    },
  },
  closeMenuOnSelect: {
    name: 'closeMenuOnSelect',
    table: {
      type: { summary: 'Close the select menu when the user selects an option' },
      defaultValue: { summary: false },
    },
  },
  hideSelectedOptions: {
    name: 'hideSelectedOptions',
    table: {
      type: { summary: 'Hide the selected option from the menu' },
      defaultValue: { summary: true },
    },
  },
  icon: {
    name: 'icon',
    table: {
      type: { summary: 'Dropdown icon' },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: 'Default dropdown with 2 sizes and 3 colors',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
}
