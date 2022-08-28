import { withRouter } from "storybook-addon-react-router-v6";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from "../link";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle/plus-circle";


export default {
  title: 'ui-kit/Link',
  component: Link,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
    },
  },
  decorators: [withRouter],
  argTypes: {
    color: {
      options: ["default", "text", "gray"],
      control: { type: 'radio' },
    },
    size: {
      options: ["default", "small"],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} redirectTo={'/'}>Link</Link>;

export const Default = Template.bind({});
Default.args = {
  redirectTo: '/',
  icon: <PlusCircleIcon size={14}/>
};
