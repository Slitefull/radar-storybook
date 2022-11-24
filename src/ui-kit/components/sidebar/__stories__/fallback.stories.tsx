import { ComponentMeta, ComponentStory } from "@storybook/react";
import SidebarFallback from "@/ui-kit/components/sidebar/fallback";


export default {
  title: "general/Sidebar",
  component: SidebarFallback,
} as ComponentMeta<typeof SidebarFallback>;


const FallbackTemplate: ComponentStory<typeof SidebarFallback> = () => <SidebarFallback/>;

export const Fallback = FallbackTemplate.bind({});
Fallback.args = {};

Fallback.parameters = {
  docs: {
    description: {
      component: "SVG-Powered component to easily create placeholder loadings (like Facebook\'s cards loading).",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=865%3A69347",
  }
}
