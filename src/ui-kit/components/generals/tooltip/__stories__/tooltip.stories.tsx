import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip from "../index";


export default {
  title: "tooltips/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <strong>Red Alerts</strong> - we mark alerts that are outliers as a Red Alert. They are based on frequency and
    previous audit data regardless of priority.
  </Tooltip>
);

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1215%3A3619",
  }
};
