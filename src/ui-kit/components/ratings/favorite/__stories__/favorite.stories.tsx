import { ComponentMeta, ComponentStory } from '@storybook/react';
import Favorite from "../favorite";


export default {
  title: 'ratings/Favorite',
  component: Favorite,
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = (args) => <Favorite {...args} />;

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
