import { ComponentMeta, ComponentStory } from '@storybook/react';
import RankIcon from "../rank";


export default {
  title: 'icons/Rank',
  component: RankIcon,
} as ComponentMeta<typeof RankIcon>;

const Template: ComponentStory<typeof RankIcon> = (args) => <RankIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  isPositive: true,
  size: 150
};
