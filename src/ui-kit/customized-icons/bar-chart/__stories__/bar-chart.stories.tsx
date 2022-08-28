import { ComponentMeta, ComponentStory } from '@storybook/react';
import BarChartIcon from "../bar-chart";


export default {
  title: 'icons/BarChart',
  component: BarChartIcon,
} as ComponentMeta<typeof BarChartIcon>;

const Template: ComponentStory<typeof BarChartIcon> = (args) => <BarChartIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
