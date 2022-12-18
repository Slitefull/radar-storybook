import { ComponentMeta, ComponentStory } from "@storybook/react";
import RoundedArrowButton from "../index";
import { PRIMARY_60, NEUTRAL_10 } from "@/ui-kit/constants/colors";


export default {
  title: "buttons/RoundedArrow",
  component: RoundedArrowButton,
} as ComponentMeta<typeof RoundedArrowButton>;

const Template: ComponentStory<typeof RoundedArrowButton> = (args) => <RoundedArrowButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  background: PRIMARY_60,
  arrowColor: NEUTRAL_10,
  rotation: "right",
  disabled: false,
  onClick: () => console.log("click")
};

Default.argTypes = {
  background: {
    name: "background",
    table: {
      type: { summary: "Button background" },
      defaultValue: { summary: `${PRIMARY_60}` },
    },
  },
  arrowColor: {
    name: "arrowColor",
    table: {
      type: { summary: "Button arrow color" },
      defaultValue: { summary: `${NEUTRAL_10}` },
    },
  },
  rotation: {
    name: "rotation",
    table: {
      type: { summary: "Button arrow rotation" },
      defaultValue: { summary: "right" },
    },
    options: ["top", "right", "bottom", "left"],
    control: { type: "radio" },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is disabled button" },
      defaultValue: { summary: false },
    },
  },
  onClick: {
    name: "onClick",
    table: {
      type: { summary: "On click button handler" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Button with arrow and 4 rotations",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1467%3A3986",
  }
}

