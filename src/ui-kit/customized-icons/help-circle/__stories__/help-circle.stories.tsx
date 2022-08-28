import { ComponentMeta, ComponentStory } from '@storybook/react';
import HelpCircleIcon from "../help-circle";


export default {
  title: 'icons/HelpCircle',
  component: HelpCircleIcon,
} as ComponentMeta<typeof HelpCircleIcon>;

const Template: ComponentStory<typeof HelpCircleIcon> = (args) => <HelpCircleIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
