import { ComponentMeta, ComponentStory } from "@storybook/react";
import RoundedBanner from "../index";


export default {
  title: "Banners/Rounded",
  component: RoundedBanner,
} as ComponentMeta<typeof RoundedBanner>;

const Template: ComponentStory<typeof RoundedBanner> = (args) => (
  <RoundedBanner {...args}>
    In order to ensure the best performance of SEO radar, please provide at least 1 representative link of your
    website, broken down into specific page types dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor <strong>(minimum 20)</strong>
  </RoundedBanner>
);

export const Default = Template.bind({});
Default.args = {};
