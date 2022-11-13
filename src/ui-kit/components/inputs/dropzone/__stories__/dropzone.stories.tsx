import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropzone from "../dropzone";


export default {
  title: "inputs/Dropzone",
  component: Dropzone,
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => <Dropzone {...args}/>;

export const Default = Template.bind({});
Default.args = {
  multiple: false,
};

Default.argTypes = {
};

Default.parameters = {
  docs: {
    description: {
      component: "Files dropzone",
    },
  },
}
