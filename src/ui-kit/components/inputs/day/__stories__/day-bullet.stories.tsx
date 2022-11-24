import { ComponentMeta, ComponentStory } from "@storybook/react";
import DayBullet from "../index";


export default {
  title: "inputs/Day",
  component: DayBullet,
} as ComponentMeta<typeof DayBullet>;

const Template: ComponentStory<typeof DayBullet> = (args) => <DayBullet {...args}/>;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  name: "day",
  label: "Mon",
  disabled: false,
  onChange: () => console.log("change"),
};

Default.argTypes = {
  checked: {
    name: "checked",
    table: {
      type: { summary: "Set is day checkbox checked" },
      defaultValue: { summary: false },
    },
  },
  name: {
    name: "name",
    table: {
      type: { summary: "Name for checkbox control element" },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Label for the checkbox" },
      defaultValue: { summary: "Mon" },
    },
  },
  onChange: {
    name: "onChange",
    table: {
      type: { summary: "On change day checkbox event" },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is checkbox disabled" },
      defaultValue: { summary: false },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Checkbox control element for the day bullet",
    },
  },
}

