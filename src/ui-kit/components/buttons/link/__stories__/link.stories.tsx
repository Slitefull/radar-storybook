import { withRouter } from "storybook-addon-react-router-v6";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "../index";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle";


export default {
  title: "buttons/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}>Link</Link>;

export const Default = Template.bind({});
Default.args = {
  icon: <PlusCircleIcon size={14}/>,
  color: "default",
  size: "default",
  disabled: false,
  onClick: () => console.log("click"),
};

Default.argTypes = {
  icon: {
    name: "icon",
    table: {
      type: { summary: "Icon for link" },
      defaultValue: {
        summary: "PlusCircleIcon",
      },
    },
  },
  color: {
    options: ["default", "text", "gray"],
    control: { type: "radio" },
    table: {
      type: { summary: "Links`s colors" },
      defaultValue: {
        summary: "default",
      },
    },
  },
  size: {
    options: ["default", "small"],
    control: { type: "radio" },
    table: {
      type: { summary: "Link`s sizes" },
      defaultValue: {
        summary: "default",
      },
    },
  },
  disabled: {
    name: "disabled",
    table: {
      type: { summary: "Set is link disabled" },
      defaultValue: {
        summary: false,
      },
    },
  },
  onClick: {
    name: "onClick",
    table: {
      type: { summary: "Set on click link handler" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Button type 'Link' with 2 sizes",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
};

Default.decorators = [withRouter];
