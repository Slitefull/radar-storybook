import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "../index";


export default {
  title: "bullets/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args}>Group</Tag>;

export const Default = Template.bind({});
Default.args = {};

Default.argTypes = {};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1448%3A4093",
  },
}
