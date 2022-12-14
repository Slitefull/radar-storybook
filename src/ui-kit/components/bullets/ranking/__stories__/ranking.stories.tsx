import { ComponentMeta, ComponentStory } from "@storybook/react";
import Ranking from "../index";
import HotRating from "@/ui-kit/components/ratings/hot";


export default {
  title: "bullets/Ranking",
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
    name: "number",
    table: {
      type: { summary: "Set number for the rating" },
      defaultValue: {
        summary: 1,
      },
    },
  },
  rank: {
    name: "rank",
    table: {
      type: { summary: "Set rank for the rating" },
      defaultValue: {
        summary: 0,
      },
    },
  },
  isPositive: {
    name: "isPositive",
    table: {
      type: { summary: "Set is positive ranking" },
      defaultValue: {
        summary: true,
      },
    },
  },
  active: {
    name: "active",
    table: {
      type: { summary: "Set is ranking active" },
      defaultValue: {
        summary: false,
      },
    },
  },
  icon: {
    name: "icon",
    table: {
      type: { summary: "Set is ranking's icon" },
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1448%3A4093",
  },
}
