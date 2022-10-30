import { ComponentMeta, ComponentStory } from "@storybook/react";
import ColoredText from "../colored";
import { DARK_LAVA } from "@/ui-kit/constants/colors";


export default {
  title: "text/Colored",
  component: ColoredText,
} as ComponentMeta<typeof ColoredText>;

const Template: ComponentStory<typeof ColoredText> = (args) => <ColoredText {...args}>Colored text</ColoredText>;

export const Default = Template.bind({});
Default.args = {
  color: "#EF4E4E",
};

Default.argTypes = {
  color: {
    name: "color",
    table: {
      type: { summary: "Text color" },
      defaultValue: { summary: `${DARK_LAVA}` },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Custom colored text",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=449%3A857",
  }
};
