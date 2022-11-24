import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconFallback from "@/ui-kit/customized-icons/fallback";


export default {
  title: 'icons/Fallback',
  component: IconFallback,
} as ComponentMeta<typeof IconFallback>;

const Template: ComponentStory<typeof IconFallback> = (args) => <IconFallback {...args}/>;

export const Default = Template.bind({});
Default.args = {
  animate: true,
  speed: 0.5,
  size: 20,
  backgroundColor: "#f7f7f7",
  foregroundColor: "#c6c3c3",
};

Default.argTypes = {
  animate: {
    name: 'animate',
    table: {
      type: { summary: 'Opt-out of animations with false' },
      defaultValue: { summary: false },
    },
  },
  speed: {
    name: 'speed',
    table: {
      type: { summary: 'Animation speed in seconds.' },
      defaultValue: { summary: 0 },
    },
  },
  size: {
    name: 'size',
    table: {
      type: { summary: "Size of the skeleton" },
      defaultValue: { summary: 20 },
    },
  },
  backgroundColor: {
    name: 'backgroundColor',
    table: {
      type: { summary: 'Used as background of animation.' },
      defaultValue: { summary: "#f7f7f7" },
    },
  },
  foregroundColor: {
    name: 'foregroundColor',
    table: {
      type: { summary: 'Used as the foreground of animation.' },
      defaultValue: { summary: "#c6c3c3" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: 'SVG-Powered component to easily create placeholder loadings (like Facebook\'s cards loading).',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=895%3A50421",
  }
}
