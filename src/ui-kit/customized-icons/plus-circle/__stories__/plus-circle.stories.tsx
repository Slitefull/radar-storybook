import { ComponentMeta, ComponentStory } from '@storybook/react';
import PlusCircleIcon from "../plus-circle";


export default {
  title: 'icons/PlusCircle',
  component: PlusCircleIcon,
} as ComponentMeta<typeof PlusCircleIcon>;

const Template: ComponentStory<typeof PlusCircleIcon> = (args) => <PlusCircleIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
