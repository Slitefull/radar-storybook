import { ComponentMeta, ComponentStory } from "@storybook/react";
import LineSeparator from "../index";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


export default {
  title: "separators/Horizontal Line",
  component: LineSeparator,
} as ComponentMeta<typeof LineSeparator>;

const Template: ComponentStory<typeof LineSeparator> = (args) => <LineSeparator {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: "100%",
  radius: 5,
  color: PLUMP_PURPLE,
};

Default.argTypes = {
  width: {
    name: "width",
    table: {
      type: { summary: "Set width for the separator" },
      defaultValue: {
        summary: "100%",
      },
    },
  },
  radius: {
    name: "radius",
    table: {
      type: { summary: "Set radius for the separator" },
      defaultValue: {
        summary: 5,
      },
    },
  },
  color: {
    name: "color",
    table: {
      type: { summary: "Set color for the separator" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Line separator",
    },
  },
};
