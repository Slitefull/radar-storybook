import { ComponentMeta, ComponentStory } from "@storybook/react";
import Rank from "../index";


export default {
  title: "text/Rank",
  component: Rank,
} as ComponentMeta<typeof Rank>;

const Template: ComponentStory<typeof Rank> = (args) => <Rank {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 1,
  isPositive: true,
};

Default.argTypes = {
  number: {
    name: "number",
    table: {
      type: {summary: "Set number for the rank"},
      defaultValue: {
        summary: 1,
      },
    },
  },
  isPositive: {
    name: "isPositive",
    table: {
      type: {summary: "Set isPositive rank"},
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1448%3A4093",
  },
}
