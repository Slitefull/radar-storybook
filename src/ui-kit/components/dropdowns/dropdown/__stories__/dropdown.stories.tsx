import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from "../dropdown";


export default {
  title: 'dropdowns/Default',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: 'Button with arrow and 4 rotations',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
    },
  },
  argTypes: {
    elements: {
      name: 'elements',
      table: {
        type: { summary: 'elements' },
        defaultValue: {
          summary: [
            {
              key: "istanbul",
              label: "Istanbul, TR (AHL)"
            },
            {
              key: "paris",
              label: "Paris, FR (CDG)"
            }
          ]
        },
      },
    },
    rounded: {
      name: 'rounded',
      table: {
        type: { summary: 'rounded' },
        defaultValue: {
          summary: false,
        },
      },
    },
    color: {
      name: 'color',
      options: ["primary", "secondary", "ghost"],
      control: { type: 'radio' },
      table: {
        type: { summary: 'color' },
        defaultValue: {
          summary: "primary",
        },
      },
    },
    size: {
      name: 'size',
      options: ["default", "small"],
      control: { type: 'radio' },
      table: {
        type: { summary: 'size' },
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args}/>;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  elements: [
    {
      key: "option_1",
      label: "Option 1"
    },
    {
      key: "option_2",
      label: "Option 2"
    }
  ],
  rounded: false,
  color: "primary",
  size: "default",
};
