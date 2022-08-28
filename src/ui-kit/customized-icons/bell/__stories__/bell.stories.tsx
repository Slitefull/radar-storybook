import { ComponentMeta, ComponentStory } from '@storybook/react';
import BellIcon from "../bell";


export default {
  title: 'icons/Bell',
  component: BellIcon,
} as ComponentMeta<typeof BellIcon>;

const Template: ComponentStory<typeof BellIcon> = (args) => <BellIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
