import { ComponentMeta, ComponentStory } from "@storybook/react";
import Status from "../index";
import { Severities } from "@/ui-kit/types/severities";


export default {
  title: "text/Status",
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args}>Severity</Status>;

export const Default = Template.bind({});
Default.args = {
  severity: Severities.Critical,
};

Default.argTypes = {
  severity: {
    name: "severity",
  },
};

Default.parameters = {}
