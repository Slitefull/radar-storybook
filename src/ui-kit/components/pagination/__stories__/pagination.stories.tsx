import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from "@/ui-kit/components/pagination/pagination";


export default {
  title: 'ui-kit/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args}/>;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalCount: 150,
  pageSize: 10,
  onPageChange: (page) => console.log(page),
  onPrevious: () => console.log("prev click"),
  onNext: () => console.log("next click"),
  siblingCount: 1,
  canPreviousPage: false,
  canNextPage: true,
};

Default.argTypes = {
  currentPage: {
    name: 'currentPage',
    table: {
      type: { summary: 'Current page of pagination' },
      defaultValue: {
        summary: 1,
      },
    },
  },
  totalCount: {
    name: 'totalCount',
    table: {
      type: { summary: 'Total count of data elements' },
      defaultValue: {
        summary: 150,
      },
    },
  },
  pageSize: {
    table: {
      type: { summary: 'Set count of data per page' },
      defaultValue: {
        summary: 10,
      },
    },
  },
  siblingCount: {
    table: {
      type: { summary: 'Preview pages count before points' },
      defaultValue: {
        summary: 1,
      },
    },
  },
  onPageChange: {
    table: {
      type: { summary: 'On page change handler' },
      defaultValue: {
        summary: '(page) => console.log(page)',
      },
    },
  },
  onPrevious: {
    table: {
      type: { summary: 'On prev page handler' },
      defaultValue: {
        summary: '() => console.log("prev click")',
      },
    },
  },
  onNext: {
    table: {
      type: { summary: 'On next page handler' },
      defaultValue: {
        summary: '() => console.log("next click")',
      },
    },
  },
  canPreviousPage: {
    table: {
      type: { summary: 'If this field is "false" - previous page button will be disabled' },
      defaultValue: {
        summary: false,
      },
    },
  },
  canNextPage: {
    table: {
      type: { summary: 'If this field is "false" - next page button will be disabled' },
      defaultValue: {
        summary: true,
      },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: 'Pagination for table and other components',
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1448%3A3747",
  },
};
