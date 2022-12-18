import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioInputFallback from "../fallback";


export default {
  title: "inputs/Radio",
  component: RadioInputFallback,
} as ComponentMeta<typeof RadioInputFallback>;


const FallbackTemplate: ComponentStory<typeof RadioInputFallback> = (args) => <RadioInputFallback {...args}/>;

export const Fallback = FallbackTemplate.bind({});
Fallback.args = {
  animate: true,
  speed: 0.5,
  width: 200,
  height: 35,
  backgroundColor: "#f7f7f7",
  foregroundColor: "#c6c3c3",
};

Fallback.argTypes = {
  animate: {
    name: "animate",
    table: {
      type: { summary: "Opt-out of animations with false" },
      defaultValue: { summary: false },
    },
  },
  speed: {
    name: "speed",
    table: {
      type: { summary: "Animation speed in seconds." },
      defaultValue: { summary: 0 },
    },
  },
  width: {
    name: "size",
    table: {
      type: { summary: "Width of the skeleton" },
      defaultValue: { summary: 200 },
    },
  },
  height: {
    name: "size",
    table: {
      type: { summary: "Height of the skeleton" },
      defaultValue: { summary: 35 },
    },
  },
  backgroundColor: {
    name: "backgroundColor",
    table: {
      type: { summary: "Used as background of animation." },
      defaultValue: { summary: "#f7f7f7" },
    },
  },
  foregroundColor: {
    name: "foregroundColor",
    table: {
      type: { summary: "Used as the foreground of animation." },
      defaultValue: { summary: "#c6c3c3" },
    },
  },
};

Fallback.parameters = {
  docs: {
    description: {
      component: "SVG-Powered component to easily create placeholder loadings (like Facebook\'s cards loading).",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=865%3A69293",
  }
}
