import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalPageContainer from "../index";


export default {
  title: "containers/Modal",
  component: ModalPageContainer,
} as ComponentMeta<typeof ModalPageContainer>;

const Template: ComponentStory<typeof ModalPageContainer> = (args) => <ModalPageContainer {...args}>
  Modal page container
</ModalPageContainer>;

export const Default = Template.bind({});
Default.args = {
  onClose: () => console.log("close"),
};

Default.argTypes = {};

Default.parameters = {};
