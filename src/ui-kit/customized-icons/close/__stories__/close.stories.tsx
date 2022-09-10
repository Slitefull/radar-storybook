import { ComponentMeta, ComponentStory } from '@storybook/react';
import CloseIcon from "@/ui-kit/customized-icons/close/close";


export default {
  title: 'icons/Close',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>;

const Template: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  size: 150
};
