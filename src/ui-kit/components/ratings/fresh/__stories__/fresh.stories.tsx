import { ComponentMeta, ComponentStory } from '@storybook/react';
import Fresh from "../fresh";


export default {
  title: 'ratings/Fresh',
  component: Fresh,
} as ComponentMeta<typeof Fresh>;

const Template: ComponentStory<typeof Fresh> = (args) => <Fresh {...args} />;

export const Default = Template.bind({});

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