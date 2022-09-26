import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from "@/ui-kit/components/inputs/radio/radio";


export default {
  title: 'inputs/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  name: "label",
  label: "List view",
  disabled: false,
  labelPosition: "left",
};

Default.argTypes = {
  checked: {
    name: 'checked',
    table: {
      type: { summary: 'Set is radio checked' },
      defaultValue: {
        summary: false,
      },
    },
  },
  name: {
    name: 'name',
    table: {
      type: { summary: 'Set is name for the radio' },
      defaultValue: {
        summary: 'label',
      },
    },
  },
  label: {
    name: 'label',
    table: {
      type: { summary: 'Set radio label' },
      defaultValue: {
        summary: 'List view',
      },
    },
  },
  labelPosition: {
    name: 'labelPosition',
    options: ["left", "right"],
    control: { type: 'radio' },
    table: {
      type: { summary: 'Set label position' },
      defaultValue: {
        summary: 'List view',
      },
    },
  },
  disabled: {
    name: 'disabled',
    table: {
      type: { summary: 'Set is radio is disabled' },
      defaultValue: {
        summary: false,
      },
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1440%3A4081",
  },
}
