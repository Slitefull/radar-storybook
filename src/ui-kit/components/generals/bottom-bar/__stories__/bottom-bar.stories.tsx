import { ComponentMeta, ComponentStory } from "@storybook/react";
import BottomBar from "../index";


export default {
  title: "General/Bottom Bar",
  component: BottomBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BottomBar>;

const Template: ComponentStory<typeof BottomBar> = (args) => <BottomBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
