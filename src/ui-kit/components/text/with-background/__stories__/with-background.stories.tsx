import { ComponentMeta, ComponentStory } from "@storybook/react";
import WithBackgroundText from "../with-background";
import { TART_ORANGE, WHITE } from "@/ui-kit/constants/colors";
import WithBackgroundTextFallback from "@/ui-kit/components/text/with-background/fallback/fallback";


export default {
  title: "text/WithBackground",
  component: WithBackgroundText,
} as ComponentMeta<typeof WithBackgroundText>;

const Template: ComponentStory<typeof WithBackgroundText> = (args) => {
  return <WithBackgroundText {...args}>WithBackground text</WithBackgroundText>
}

export const Default = Template.bind({});
Default.args = {
  color: "#FFFFFF",
  background: "#EF4E4E"
};

Default.argTypes = {
  color: {
    name: "color",
    table: {
      type: { summary: "Text color" },
      defaultValue: { summary: `${WHITE}` },
    },
  },
  background: {
    name: "background",
    table: {
      type: { summary: "Text background" },
      defaultValue: { summary: `${TART_ORANGE}` },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Custom text with background",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=449%3A241",
  }
};

const FallbackTemplate: ComponentStory<typeof WithBackgroundTextFallback> = (args) => {
  return <WithBackgroundTextFallback {...args}/>
}

export const Fallback = FallbackTemplate.bind({});
Fallback.args = {
  animate: true,
  speed: 0.5,
  width: 140,
  height: 20,
  backgroundColor: "#f7f7f7",
  foregroundColor: "#c6c3c3",
};
