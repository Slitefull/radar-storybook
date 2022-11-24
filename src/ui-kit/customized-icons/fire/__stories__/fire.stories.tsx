import { ComponentMeta, ComponentStory } from '@storybook/react';
import FireIcon from "../index";


export default {
  title: 'icons/Fire',
  component: FireIcon,
} as ComponentMeta<typeof FireIcon>;

const Template: ComponentStory<typeof FireIcon> = (args) => <FireIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  size: 150
};
