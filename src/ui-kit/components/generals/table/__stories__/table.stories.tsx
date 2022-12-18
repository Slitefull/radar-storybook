import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NEUTRAL_50, PRIMARY_40, PRIMARY_100 } from "@/ui-kit/constants/colors";
import { mockData } from "@/ui-kit/components/generals/table/__mocks__/data";
import Table from "@/ui-kit/components/generals/table";
import Text from "@/ui-kit/components/typography/text";


type Severities = "Critical" | "High" | "Medium";
type Statuses = "Resolved" | "Unresolved";

interface SeveritiesCell {
  value: Severities;
}

interface TableData {
  id: string | number;
  url: string;
  severity: Severities;
  changes: string;
  status: Statuses;
  group_by_date: string;
}

const SeverityColorsRecord: Record<Severities, Color> = {
  "Critical": PRIMARY_100,
  "High": PRIMARY_40,
  "Medium": NEUTRAL_50,
};

export default {
  title: "ui-kit/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args}/>;

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      Header: "Target URL",
      accessor: ({ url }: TableData) => url,
      width: 300,
    },
    {
      Header: "Severity",
      accessor: "severity",
      Cell: ({ value }: SeveritiesCell) => (
        <Text background={SeverityColorsRecord[value]}>
          {value}
        </Text>
      ),
      width: 110,
    },
    {
      Header: "Changes",
      accessor: ({ changes }: TableData) => changes,
      width: 245,
    },
    {
      Header: "Status",
      accessor: ({ status }: TableData) => status,
      width: 100,
    },
    {
      Header: "Group by date",
      accessor: ({ group_by_date }: TableData) => group_by_date,
      width: 250,
    },
  ],
  data: mockData,
  withPagination: true,
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=237%3A7832",
  },
};
