import { ComponentMeta, ComponentStory } from "@storybook/react";
import Radio from "@/ui-kit/components/inputs/radio";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


export default {
  title: "inputs/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  name: "label",
  disabled: false,
  onChange: () => console.log("change"),
  label: "List view",
  labelPosition: "left",
  labelColor: PLUMP_PURPLE,
};

Default.argTypes = {
  checked: {
    name: "checked",
    table: {
      type: { summary: "Set is radio checked" },
      defaultValue: {
        summary: false,
      },
    },
  },
  name: {
    name: "name",
    table: {
      type: { summary: "Set is name for the radio" },
      defaultValue: {
        summary: "label",
      },
    },
  },
  onChange: {
    name: "onChange",
    table: {
      type: { summary: "On change radio event" },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Set radio label" },
      defaultValue: {
        summary: "List view",
      },
    },
  },
  labelPosition: {
    name: "labelPosition",
    options: ["top", "right", "bottom", "left"],
    control: { type: "radio" },
    table: {
      type: { summary: "Position of the label" },
      defaultValue: { summary: "top" },
    },
  },
  labelColor: {
    name: "labelColor",
    options: ["primary", "ghost", "subtly"],
    control: { type: "radio" },
    table: {
      type: { summary: "Color of the label" },
      defaultValue: { summary: "primary" },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is radio is disabled" },
      defaultValue: {
        summary: false,
      },
    },
  },
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1440%3A4081",
  },
}
