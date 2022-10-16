import { ComponentMeta, ComponentStory } from '@storybook/react';
import DayBullet from "../day";


export default {
  title: 'bullets/Day',
  component: DayBullet,
} as ComponentMeta<typeof DayBullet>;

const Template: ComponentStory<typeof DayBullet> = (args) => <DayBullet {...args}/>;

export const Default = Template.bind({});
Default.args = {
  name: "Mon",
  active: false,
};

Default.argTypes = {
  name: {
    name: 'name',
    table: {
      type: { summary: 'Button types' },
      defaultValue: { summary: 'MON' },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: 'Default button with 3 colors and 2 sizes.',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
}

