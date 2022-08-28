import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from "../checkbox";


export default {
  title: 'inputs/Checkbox',
  component: Checkbox,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=482%3A475",
    },
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  label: "Label",
  isDisabled: false,
};
