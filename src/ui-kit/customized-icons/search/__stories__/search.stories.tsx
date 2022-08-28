import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchIcon from "../../search/search";


export default {
  title: 'icons/Search',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = (args) => <SearchIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "#4dcfff",
  size: 150
};
