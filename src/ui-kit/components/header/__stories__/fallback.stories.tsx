import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeaderFallback from "@/ui-kit/components/header/fallback/fallback";


export default {
  title: 'General/Header',
  component: HeaderFallback,
} as ComponentMeta<typeof HeaderFallback>;

const FallbackTemplate: ComponentStory<typeof HeaderFallback> = (args) => <HeaderFallback {...args}/>;

export const Fallback = FallbackTemplate.bind({});
Fallback.args = {};

Fallback.parameters = {
  docs: {
    description: {
      component: 'SVG-Powered component to easily create placeholder loadings (like Facebook\'s cards loading).',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=865%3A69320",
  }
}
