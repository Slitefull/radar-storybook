import { ComponentMeta, ComponentStory } from '@storybook/react';
import QuestionIcon from "../index";


export default {
  title: 'icons/Question',
  component: QuestionIcon,
} as ComponentMeta<typeof QuestionIcon>;

const Template: ComponentStory<typeof QuestionIcon> = (args) => <QuestionIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  size: 150
};
