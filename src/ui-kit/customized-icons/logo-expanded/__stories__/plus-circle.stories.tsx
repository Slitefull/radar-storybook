import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoExpanded from "@/ui-kit/customized-icons/logo-expanded";


export default {
  title: 'icons/LogoExpanded',
  component: LogoExpanded,
} as ComponentMeta<typeof LogoExpanded>;

const Template: ComponentStory<typeof LogoExpanded> = (args) => <LogoExpanded {...args}/>;

export const Default = Template.bind({});
Default.args = {};
