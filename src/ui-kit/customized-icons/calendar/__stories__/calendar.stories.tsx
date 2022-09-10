import { ComponentMeta, ComponentStory } from '@storybook/react';
import CalendarIcon from "../calendar";


export default {
  title: 'icons/Calendar',
  component: CalendarIcon,
} as ComponentMeta<typeof CalendarIcon>;

const Template: ComponentStory<typeof CalendarIcon> = (args) => <CalendarIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  size: 150
};
