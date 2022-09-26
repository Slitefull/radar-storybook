import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from "../text";
import SearchIcon from "@/ui-kit/customized-icons/search/search";


export default {
  title: 'inputs/Text',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  helperText: "Error",
  disabled: false,
  icon: <SearchIcon size={15}/>,
  iconPosition: "start",
  value: "",
  label: "Label",
};

Default.argTypes = {
  placeholder: {
    name: 'placeholder',
    table: {
      type: { summary: 'Placeholder for input' },
      defaultValue: {
        summary: false,
      },
    },
  },
  helperText: {
    name: 'helperText',
    table: {
      type: { summary: 'Helper text for error/warning/success' },
      defaultValue: {
        summary: "error",
      },
    },
  },
  disabled: {
    name: 'disabled',
    table: {
      type: { summary: 'Set is field is disabled' },
      defaultValue: {
        summary: false,
      },
    },
  },
  icon: {
    name: 'icon',
    table: {
      type: { summary: 'Set icon for the input' },
      defaultValue: {
        summary: '<SearchIcon/>',
      },
    },
  },
  iconPosition: {
    name: 'iconPosition',
    options: ["start", "end"],
    control: { type: 'radio' },
    table: {
      type: { summary: 'Set position for the icon' },
      defaultValue: {
        summary: "start",
      },
    },
  },
  value: {
    name: 'value',
    table: {
      type: { summary: 'Set value for input' },
      defaultValue: {
        summary: "",
      },
    },
  },
  label: {
    name: 'label',
    table: {
      type: { summary: 'Input`s label' },
      defaultValue: {
        summary: "Label",
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
