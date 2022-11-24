import { ComponentMeta, ComponentStory } from '@storybook/react';
import ActivityIcon from "../index";


export default {
  title: 'icons/Activity',
  component: ActivityIcon,
} as ComponentMeta<typeof ActivityIcon>;

const Template: ComponentStory<typeof ActivityIcon> = (args) => <ActivityIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
