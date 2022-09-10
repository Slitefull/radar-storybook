import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from "../checkbox";


export default {
  title: 'inputs/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  isChecked: false,
  label: "Label",
  name: "name",
  isDisabled: false,
};

Default.argTypes = {
  isChecked: {
    name: 'isChecked',
    table: {
      type: { summary: 'Set is checkbox checked' },
      defaultValue: {
        summary: false,
      },
    },
  },
  label: {
    name: 'label',
    table: {
      type: { summary: 'Checkbox label' },
      defaultValue: {
        summary: 'Label',
      },
    },
  },
  name: {
    name: 'name',
    table: {
      type: { summary: 'Checkbox name' },
      defaultValue: {
        summary: 'name',
      },
    },
  },
  isDisabled: {
    name: 'isDisabled',
    table: {
      type: { summary: 'Set is checkbox disabled' },
      defaultValue: {
        summary: false,
      },
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=482%3A475",
  },
}
