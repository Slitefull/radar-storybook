import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import GridIcon from "../grid";


export default {
  title: 'icons/Grid',
  component: GridIcon,
} as ComponentMeta<typeof GridIcon>;

const Template: ComponentStory<typeof GridIcon> = (args) => <GridIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: ROCKET_METALLIC,
  size: 150
};
