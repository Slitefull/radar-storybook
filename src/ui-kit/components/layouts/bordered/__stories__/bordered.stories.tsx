import { ComponentMeta, ComponentStory } from "@storybook/react";
import BorderedLayout from "../index";


export default {
  title: "layouts/Bordered",
  component: BorderedLayout,
} as ComponentMeta<typeof BorderedLayout>;

const Template: ComponentStory<typeof BorderedLayout> = (args) => (
  <BorderedLayout {...args}>
    Layout
  </BorderedLayout>
);

export const Default = Template.bind({});

Default.args = {
  margin: "auto",
  padding: "30px",
  width: "100%",
  height: "100%",
};

Default.argTypes = {
  margin: {
    name: "margin",
    table: {
      type: { summary: "Layout margin" },
      defaultValue: { summary: "auto" },
    },
  },
  padding: {
    name: "padding",
    table: {
      type: { summary: "Layout padding" },
      defaultValue: { summary: "30px" },
    },
  },
  width: {
    name: "width",
    table: {
      type: { summary: "Layout width" },
      defaultValue: { summary: "100%" },
    },
  },
  height: {
    name: "height",
    table: {
      type: { summary: "Layout height" },
      defaultValue: { summary: "100%" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Bordered layout",
    },
  },
}
