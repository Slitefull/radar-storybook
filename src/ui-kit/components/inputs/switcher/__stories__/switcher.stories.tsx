import { ComponentMeta, ComponentStory } from '@storybook/react';
import Switcher from "../switcher";
import { DARK_LAVA, PLATINUM } from "@/ui-kit/constants/colors";


export default {
  title: 'inputs/Switcher',
  component: Switcher,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=693%3A8227",
    },
  }
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) => <Switcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  borderColor: DARK_LAVA,
  backgroundColor: PLATINUM,
  pointColor: DARK_LAVA,
  label: "Label"
};
