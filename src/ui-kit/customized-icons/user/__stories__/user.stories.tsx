import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserIcon from "../user";


export default {
  title: 'icons/User',
  component: UserIcon,
} as ComponentMeta<typeof UserIcon>;

const Template: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
