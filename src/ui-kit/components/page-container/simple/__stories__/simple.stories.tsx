import { ComponentMeta, ComponentStory } from "@storybook/react";
import PageContainer from "../index";


export default {
  title: "containers/Simple",
  component: PageContainer,
} as ComponentMeta<typeof PageContainer>;

const Template: ComponentStory<typeof PageContainer> = (args) => <PageContainer {...args}>
  Simple page container
</PageContainer>;

export const Default = Template.bind({});
Default.args = {};

Default.argTypes = {};

Default.parameters = {};
