import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoPrimary from "../index";


export default {
  title: 'icons/Logo Primary',
  component: LogoPrimary,
} as ComponentMeta<typeof LogoPrimary>;

const Template: ComponentStory<typeof LogoPrimary> = (args) => <LogoPrimary {...args}/>;

export const Default = Template.bind({});
Default.args = {
  size: 150
};
