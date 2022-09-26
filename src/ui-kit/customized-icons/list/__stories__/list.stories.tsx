import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListIcon from "../list";
import { WHITE } from "@/ui-kit/constants/colors";


export default {
  title: 'icons/List',
  component: ListIcon,
} as ComponentMeta<typeof ListIcon>;

const Template: ComponentStory<typeof ListIcon> = (args) => <ListIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: WHITE,
  size: 150
};
