import { ComponentMeta, ComponentStory } from '@storybook/react';
import WithBackgroundText from "../with-background";
import { TART_ORANGE, WHITE } from "@/ui-kit/constants/colors";


export default {
  title: 'text/WithBackground',
  component: WithBackgroundText,
  parameters: {
    docs: {
      description: {
        component: 'Custom text with background',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=449%3A241",
    }
  },
  argTypes: {
    color: {
      name: 'color',
      table: {
        type: { summary: 'Text color' },
        defaultValue: { summary: `${WHITE}` },
      },
    },
    background: {
      name: 'background',
      table: {
        type: { summary: 'Text background' },
        defaultValue: { summary: `${TART_ORANGE}` },
      },
    },
  },
} as ComponentMeta<typeof WithBackgroundText>;

const Template: ComponentStory<typeof WithBackgroundText> = (args) => (
  <WithBackgroundText {...args}>WithBackground text</WithBackgroundText>
);

export const Default = Template.bind({});
Default.args = {
  color: '#FFFFFF',
  background: '#EF4E4E'
};
