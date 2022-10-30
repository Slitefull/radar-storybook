import { ComponentMeta, ComponentStory } from "@storybook/react";
import Meridian from "../meridian";


export default {
  title: "inputs/Meridian",
  component: Meridian,
} as ComponentMeta<typeof Meridian>;

const Template: ComponentStory<typeof Meridian> = (args) => <Meridian {...args}/>;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  name: "meridian",
  label: "AM",
  disabled: false,
  onChange: () => console.log("change"),
};

Default.argTypes = {
  checked: {
    name: "checked",
    table: {
      type: { summary: "Set is day radio checked" },
      defaultValue: { summary: false },
    },
  },
  name: {
    name: "name",
    table: {
      type: { summary: "Name for radio control element" },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Label for the radio" },
      defaultValue: { summary: "Mon" },
    },
  },
  onChange: {
    name: "onChange",
    table: {
      type: { summary: "On change meridian radio event" },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is radio disabled" },
      defaultValue: { summary: false },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Radio to set meridian",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1526%3A4086",
  }
}

