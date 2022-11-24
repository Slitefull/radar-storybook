import { ComponentMeta, ComponentStory } from '@storybook/react';
import TargetIcon from "../index";


export default {
  title: 'icons/Target',
  component: TargetIcon,
} as ComponentMeta<typeof TargetIcon>;

const Template: ComponentStory<typeof TargetIcon> = (args) => <TargetIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
