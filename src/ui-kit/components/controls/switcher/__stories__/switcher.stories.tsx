import { ComponentMeta, ComponentStory } from "@storybook/react";
import Switcher from "../index";
import { NEUTRAL_90, NEUTRAL_20 } from "@/ui-kit/constants/colors";


export default {
  title: "inputs/Switcher",
  component: Switcher,
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) => <Switcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  borderColor: NEUTRAL_90,
  backgroundColor: NEUTRAL_20,
  pointColor: NEUTRAL_90,
  label: "Label"
};

Default.argTypes = {
  isChecked: {
    name: "isChecked",
    table: {
      type: { summary: "Set is checkbox checked" },
      defaultValue: {
        summary: false,
      },
    },
  },
  borderColor: {
    name: "borderColor",
    table: {
      type: { summary: "Set border color for switcher" },
      defaultValue: {
        summary: NEUTRAL_90,
      },
    },
  },
  backgroundColor: {
    name: "backgroundColor",
    table: {
      type: { summary: "Set background color for switcher" },
      defaultValue: {
        summary: NEUTRAL_20,
      },
    },
  },
  pointColor: {
    name: "pointColor",
    table: {
      type: { summary: "Set color for switcher point" },
      defaultValue: {
        summary: NEUTRAL_90,
      },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Switcher label" },
      defaultValue: {
        summary: "Label",
      },
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=693%3A8227",
  },
}
