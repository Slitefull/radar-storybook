import { ComponentMeta, ComponentStory } from '@storybook/react';
import AtSignIcon from "../at-sign";


export default {
  title: 'icons/AtSign',
  component: AtSignIcon,
} as ComponentMeta<typeof AtSignIcon>;

const Template: ComponentStory<typeof AtSignIcon> = (args) => <AtSignIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
