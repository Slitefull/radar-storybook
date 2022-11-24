import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookOpenIcon from "../index";


export default {
  title: 'icons/BookOpen',
  component: BookOpenIcon,
} as ComponentMeta<typeof BookOpenIcon>;

const Template: ComponentStory<typeof BookOpenIcon> = (args) => <BookOpenIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
