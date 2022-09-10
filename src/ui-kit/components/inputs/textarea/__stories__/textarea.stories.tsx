import { ComponentMeta, ComponentStory } from '@storybook/react';
import Textarea from "../textarea";


export default {
  title: 'inputs/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  helperText: "Error",
  disabled: false,
};

Default.argTypes = {
  placeholder: {
    name: 'placeholder',
    table: {
      type: { summary: 'Placeholder for textarea' },
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
      type: { summary: 'Set is textarea is disabled' },
      defaultValue: {
        summary: false,
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
