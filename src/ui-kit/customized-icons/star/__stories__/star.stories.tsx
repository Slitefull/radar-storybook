import { ComponentMeta, ComponentStory } from '@storybook/react';
import StarIcon from "../star";


export default {
  title: 'icons/Star',
  component: StarIcon,
} as ComponentMeta<typeof StarIcon>;

const Template: ComponentStory<typeof StarIcon> = (args) => <StarIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
