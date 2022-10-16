import { ComponentMeta, ComponentStory } from '@storybook/react';
import Ranking from "../ranking";
import HotRating from "@/ui-kit/components/ratings/hot/hot";


export default {
  title: 'bullets/Ranking',
  component: Ranking,
} as ComponentMeta<typeof Ranking>;

const Template: ComponentStory<typeof Ranking> = (args) => <Ranking {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 1,
  rank: 0,
  isPositive: true,
  active: false,
  icon: <HotRating/>,
};

Default.argTypes = {
  number: {
    name: 'number',
    table: {
      type: { summary: 'Set is radio checked' },
      defaultValue: {
        summary: 1,
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
