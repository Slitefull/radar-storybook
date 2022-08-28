import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckmarkIcon from "../checkmark";


export default {
  title: 'icons/Checkmark',
  component: CheckmarkIcon,
} as ComponentMeta<typeof CheckmarkIcon>;

const Template: ComponentStory<typeof CheckmarkIcon> = (args) => <CheckmarkIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
