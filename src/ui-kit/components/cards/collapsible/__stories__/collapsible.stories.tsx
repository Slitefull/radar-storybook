import { ComponentMeta, ComponentStory } from '@storybook/react';
import Collapsible from "@/ui-kit/components/cards/collapsible/collapsible";


export default {
  title: 'cards/Collapsible',
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => <Collapsible {...args}>
  Consectetur adipiscing elit pellentesque habitant morbi tristique.
  Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
  pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
</Collapsible>;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Crawl settings",
  subTitle: "How SEO Radar fetches your site's pages.",
};

Default.argTypes = {
  open: {
    name: 'open',
    table: {
      type: { summary: 'Set is open card by default' },
      defaultValue: { summary: false },
    },
  },
  title: {
    name: 'title',
    table: {
      type: { summary: 'Set header`s title' },
      defaultValue: { summary: 'Any string' },
    },
  },
  subTitle: {
    name: 'subTitle',
    table: {
      type: { summary: 'Set header`s subtitle' },
      defaultValue: { summary: 'Any string' },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: 'Collapsible card with any children (ReactNode or string)',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=952%3A51493",
  }
}
