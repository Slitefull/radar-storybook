import { ComponentMeta, ComponentStory } from '@storybook/react';
import SingleDatepicker from "@/ui-kit/components/datepickers/single/single";


export default {
  title: 'datepicker/Single',
  component: SingleDatepicker,
} as ComponentMeta<typeof SingleDatepicker>;

const Template: ComponentStory<typeof SingleDatepicker> = (args) => <SingleDatepicker {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.argTypes = {};

Default.parameters = {
  docs: {
    description: {
      component: 'Default dropdown with 2 sizes and 3 colors',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
}
