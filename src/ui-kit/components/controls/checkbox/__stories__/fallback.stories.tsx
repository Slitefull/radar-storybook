import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckboxFallback from "@/ui-kit/components/controls/checkbox/fallback";


export default {
  title: "inputs/Checkbox",
  component: CheckboxFallback,
} as ComponentMeta<typeof CheckboxFallback>;


const FallbackTemplate: ComponentStory<typeof CheckboxFallback> = (args) => <CheckboxFallback {...args} />;

export const Fallback = FallbackTemplate.bind({});

Fallback.args = {
  animate: true,
  speed: 0.5,
  withLabel: true,
  labelPosition: "left",
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
  withLabel: {
    name: "withLabel",
    table: {
      type: { summary: "Choose if you want to see skeleton with label" },
      defaultValue: {
        summary: true,
      },
    },
  },
  labelPosition: {
    name: "labelPosition",
    options: ["left", "right"],
    control: { type: "radio" },
    table: {
      type: { summary: "Position of the label" },
      defaultValue: {
        summary: "left",
      },
    },
  },
  speed: {
    name: "speed",
    table: {
      type: { summary: "Animation speed in seconds." },
      defaultValue: { summary: 0 },
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
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=865%3A69309",
  }
}
