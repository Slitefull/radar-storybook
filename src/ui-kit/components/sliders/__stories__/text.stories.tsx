import { ComponentMeta, ComponentStory } from "@storybook/react";
import SliderText from "@/ui-kit/components/sliders";
import "swiper/css";


export default {
  title: "sliders/Text",
  component: SliderText,
} as ComponentMeta<typeof SliderText>;

const Template: ComponentStory<typeof SliderText> = (args) => <SliderText {...args}/>;

export const Default = Template.bind({});
Default.args = {
  elements: [
    <div><strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends</div>,
    <div><strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends</div>,
    <div><strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends</div>,
    <div><strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends</div>
  ]
};

Default.argTypes = {
  elements: {
    name: "elements",
    table: {
      type: { summary: "Elements of the slider" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Slider with text or ReactNode",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=1031%3A40317",
  },
};
