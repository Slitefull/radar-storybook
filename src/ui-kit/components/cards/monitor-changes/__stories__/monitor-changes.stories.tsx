import { ComponentMeta, ComponentStory } from "@storybook/react";
import MonitorChangesCard from "../monitor-changes";


export default {
  title: "cards/Monitor Changes",
  component: MonitorChangesCard,
} as ComponentMeta<typeof MonitorChangesCard>;

const Template: ComponentStory<typeof MonitorChangesCard> = (args) => <MonitorChangesCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  name: "yahoo",
  total: {
    count: 10,
    percentage: 5,
    isPositive: true,
  }
};

Default.argTypes = {
  name: {
    name: "name",
    table: {
      type: { summary: "Card name" },
      defaultValue: {
        summary: "yahoo",
      },
    },
  },
  total: {
    name: "total",
    table: {
      type: { summary: "Total count with percentage" },
      defaultValue: {
        summary: `{
          count: 10,
          percentage: 5,
          isPositive: true,
        }`
      },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Card for page 'Monitor changes' with charts",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=231%3A6920",
  }
}
