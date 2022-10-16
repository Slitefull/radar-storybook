import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from "../label";


export default {
  title: 'labels/Default',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}>Label</Label>;

export const Default = Template.bind({});

Default.args = {
  color: "primary",
};

Default.argTypes = {
  color: {
    name: 'color',
    table: {
      type: { summary: 'Set is checkbox disabled' },
      defaultValue: {
        summary: false,
      },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: 'Tabs with any children',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=482%3A475",
  },
}
