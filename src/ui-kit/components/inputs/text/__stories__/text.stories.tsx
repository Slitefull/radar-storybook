import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from "../text";


export default {
  title: 'inputs/Text',
  component: Input,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1505%3A3905",
    },
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  helperText: "Error",
  withIcon: false,
};
