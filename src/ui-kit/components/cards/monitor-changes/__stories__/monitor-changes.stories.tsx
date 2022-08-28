import { ComponentMeta, ComponentStory } from '@storybook/react';
import MonitorChangesCard from "../monitor-changes";


export default {
  title: 'cards/MonitorChanges',
  component: MonitorChangesCard,
  parameters: {
    docs: {
      description: {
        component: 'Button with arrow and 4 rotations qwe',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=667%3A20342",
    }
  },
} as ComponentMeta<typeof MonitorChangesCard>;

const Template: ComponentStory<typeof MonitorChangesCard> = (args) => <MonitorChangesCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  cardLink: {
    title: "yahoo",
    link: "https://yahoo.com"
  },
  total: {
    count: 10,
    percentage: 5,
    isPositive: true,
  }
};
