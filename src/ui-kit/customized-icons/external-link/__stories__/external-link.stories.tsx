import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExternalLinkIcon from "../index";


export default {
  title: 'icons/External link',
  component: ExternalLinkIcon,
} as ComponentMeta<typeof ExternalLinkIcon>;

const Template: ComponentStory<typeof ExternalLinkIcon> = (args) => <ExternalLinkIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  size: 150
};
