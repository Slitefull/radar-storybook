import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hot from "../hot";


export default {
  title: 'ratings/Hot',
  component: Hot,
} as ComponentMeta<typeof Hot>;

const Template: ComponentStory<typeof Hot> = (args) => <Hot {...args} />;

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
