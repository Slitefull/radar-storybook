import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundedArrowButton from "../rounded-arrow";
import { PLUMP_PURPLE, SNOW } from "@/ui-kit/constants/colors";


export default {
  title: 'buttons/RoundedArrow',
  component: RoundedArrowButton,
  parameters: {
    docs: {
      description: {
        component: 'Button with arrow and 4 rotations',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1467%3A3986",
    }
  },
  argTypes: {
    background: {
      name: 'background',
      table: {
        type: { summary: 'Button background' },
        defaultValue: { summary: `${PLUMP_PURPLE}` },
      },
    },
    arrowColor: {
      name: 'arrowColor',
      table: {
        type: { summary: 'Button arrow color' },
        defaultValue: { summary: `${SNOW}` },
      },
    },
    rotation: {
      name: 'rotation',
      table: {
        type: { summary: 'Button arrow rotation' },
        defaultValue: { summary: "right" },
      },
      options: ["top", "right", "bottom", "left"],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof RoundedArrowButton>;

const Template: ComponentStory<typeof RoundedArrowButton> = (args) => <RoundedArrowButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  background: PLUMP_PURPLE,
  arrowColor: SNOW,
  rotation: "right",
};
