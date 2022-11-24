import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowIcon from "../index";


export default {
  title: 'icons/Arrow',
  component: ArrowIcon,
} as ComponentMeta<typeof ArrowIcon>;

const Template: ComponentStory<typeof ArrowIcon> = (args) => <ArrowIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
