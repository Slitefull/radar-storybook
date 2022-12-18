import { ComponentMeta, ComponentStory } from "@storybook/react";
import MonitoringListView from "../index";
import { createMockColumn, createMockTopInfo } from "../__mock__";


export default {
  title: "monitoring/List view",
  component: MonitoringListView,
} as ComponentMeta<typeof MonitoringListView>;

const Template: ComponentStory<typeof MonitoringListView> = (args) => <MonitoringListView {...args}/>;

export const Default = Template.bind({});

const info = createMockTopInfo();
const columns = createMockColumn();

Default.args = {
  info,
  columns,
};

Default.argTypes = {};

Default.parameters = {};
