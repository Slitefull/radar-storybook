import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToolIcon from "../index";


export default {
  title: 'icons/Tool',
  component: ToolIcon,
} as ComponentMeta<typeof ToolIcon>;

const Template: ComponentStory<typeof ToolIcon> = (args) => <ToolIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
