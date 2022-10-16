import { ComponentMeta, ComponentStory } from '@storybook/react';
import RadarLoader from "../radar";


export default {
  title: 'loaders/Radar',
  component: RadarLoader,
} as ComponentMeta<typeof RadarLoader>;

const Template: ComponentStory<typeof RadarLoader> = (args) => <RadarLoader {...args}/>;

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = {};

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
