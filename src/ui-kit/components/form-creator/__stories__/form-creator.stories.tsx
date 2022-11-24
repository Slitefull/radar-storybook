import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormCreator from "../index";


export default {
  title: "controls/Form Creator",
  component: FormCreator,
} as ComponentMeta<typeof FormCreator>;

const Template: ComponentStory<typeof FormCreator> = (args) => <FormCreator {...args}/>;

export const Default = Template.bind({});
Default.args = {
  components: [<div>QWE</div>],
};

Default.argTypes = {
  components: {
    name: "components",
    table: {
      type: { summary: "Set is button rounded" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Default button with 3 colors and 2 sizes.",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1414%3A3826",
  },
};

