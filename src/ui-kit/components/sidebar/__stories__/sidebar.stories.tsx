import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Sidebar from "../sidebar";
import { withRecoilFlow } from "storybook-addon-recoil-flow/dist/decorator";


export default {
  title: "general/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [withRouter, withRecoilFlow];

Default.parameters = {
  docs: {
    description: {
      component: "Sidebar with routing and recoil logic",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=423%3A35",
  },
};
