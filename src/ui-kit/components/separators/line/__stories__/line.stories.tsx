import { ComponentMeta, ComponentStory } from '@storybook/react';
import LineSeparator from "../line";


export default {
  title: 'separators/Horizontal Line',
  component: LineSeparator,
} as ComponentMeta<typeof LineSeparator>;

const Template: ComponentStory<typeof LineSeparator> = (args) => <LineSeparator {...args} />;

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
