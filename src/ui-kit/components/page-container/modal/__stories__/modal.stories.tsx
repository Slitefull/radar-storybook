import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalPageContainer from "../modal";


export default {
  title: "containers/Modal",
  component: ModalPageContainer,
} as ComponentMeta<typeof ModalPageContainer>;

const Template: ComponentStory<typeof ModalPageContainer> = (args) => <ModalPageContainer {...args}>
  Modal page container
</ModalPageContainer>;

export const Default = Template.bind({});
Default.args = {
  withClose: true,
  onClose: () => console.log("close"),
};

Default.argTypes = {
  withClose: {
    name: "withClose",
    table: {
      type: { summary: "Set is with close icon container" },
      defaultValue: {
        summary: true,
      },
    },
  },
};

Default.parameters = {};
