import { ComponentMeta, ComponentStory } from "@storybook/react";
import BorderedLayout from "../bordered";


export default {
  title: "layouts/Bordered",
  component: BorderedLayout,
} as ComponentMeta<typeof BorderedLayout>;

const Template: ComponentStory<typeof BorderedLayout> = (args) => <BorderedLayout {...args}>Layout</BorderedLayout>;

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = {};

Default.parameters = {
  docs: {
    description: {
      component: "Radar loader",
    },
  },
}
