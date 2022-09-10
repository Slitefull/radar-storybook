import { withRouter } from "storybook-addon-react-router-v6";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from "../link";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle/plus-circle";


export default {
  title: 'ui-kit/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}>Link</Link>;

export const Default = Template.bind({});
Default.args = {
  redirectTo: '/',
  icon: <PlusCircleIcon size={14}/>,
  color: 'default',
  size: 'default',
};

Default.argTypes = {
  redirectTo: {
    name: 'redirectTo',
    table: {
      type: { summary: 'OnClick event redirect' },
      defaultValue: {
        summary: '/',
      },
    },
  },
  icon: {
    name: 'icon',
    table: {
      type: { summary: 'Icon for link' },
      defaultValue: {
        summary: 'PlusCircleIcon',
      },
    },
  },
  color: {
    options: ["default", "text", "gray"],
    control: { type: 'radio' },
    table: {
      type: { summary: 'Links`s colors' },
      defaultValue: {
        summary: "default",
      },
    },
  },
  size: {
    options: ["default", "small"],
    control: { type: 'radio' },
    table: {
      type: { summary: 'Link`s sizes' },
      defaultValue: {
        summary: 'default',
      },
    },
  },
};

Default.parameters = {
  design: {
    type: "Default link with 3 colors and 2 sizes",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
};

Default.decorators = [withRouter];
