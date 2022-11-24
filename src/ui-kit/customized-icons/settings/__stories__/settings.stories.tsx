import { ComponentMeta, ComponentStory } from '@storybook/react';
import SettingsIcon from "../index";


export default {
  title: 'icons/Settings',
  component: SettingsIcon,
} as ComponentMeta<typeof SettingsIcon>;

const Template: ComponentStory<typeof SettingsIcon> = (args) => <SettingsIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
