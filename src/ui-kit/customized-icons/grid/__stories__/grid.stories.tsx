import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NEUTRAL_60 } from "@/ui-kit/constants/colors";
import GridIcon from "../index";


export default {
  title: 'icons/Grid',
  component: GridIcon,
} as ComponentMeta<typeof GridIcon>;

const Template: ComponentStory<typeof GridIcon> = (args) => <GridIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: NEUTRAL_60,
  size: 150
};
