import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadarLoader from "../index";


export default {
  title: "loaders/Radar",
  component: RadarLoader,
} as ComponentMeta<typeof RadarLoader>;

const Template: ComponentStory<typeof RadarLoader> = (args) => <RadarLoader {...args}/>;

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
