import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from "storybook-addon-react-router-v6";
import Footer from "../footer";

export default {
  title: 'General/Header',
  component: Footer,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
