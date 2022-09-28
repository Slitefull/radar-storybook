import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListGridView from "../list-grid-view";


export default {
  title: 'buttons/List Grid View',
  component: ListGridView,
} as ComponentMeta<typeof ListGridView>;

const Template: ComponentStory<typeof ListGridView> = (args) => <ListGridView {...args}/>;

export const Default = Template.bind({});
Default.args = {
  activeView: "list",
  onListChooseHandler: () => console.log("list"),
  onGridChooseHandler: () => console.log("grid"),
};

Default.argTypes = {
  activeView: {
    name: 'activeView',
    options: ["list", "grid"],
    control: { type: 'radio' },
    table: {
      type: { summary: 'Active tab' },
      defaultValue: { summary: 'list' },
    },
  },
  onListChooseHandler: {
    name: 'onListChooseHandler',
    table: {
      type: { summary: 'When click on list button handler' },
    },
  },
  onGridChooseHandler: {
    name: 'onGridChooseHandler',
    table: {
      type: { summary: 'When click on grid button handler' },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: 'Buttons to set "List" or "Grid" view',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1526%3A4086",
  }
}

