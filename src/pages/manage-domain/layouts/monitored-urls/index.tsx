import { FC, memo, useMemo } from 'react';
import { CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { createData } from "@/pages/manage-domain/layouts/monitored-urls/__mock__";
import { NEUTRAL_100 } from "@/ui-kit/constants/colors";
import faker from "faker";
import Table from "@/ui-kit/components/generals/table";
import Text from "@/ui-kit/components/typography/text";


interface TableData {
  urls: string;
  httpStatus: number;
  changes: number;
  responseTime: number;
  pageLoad: number;
  pageSize: number;
}

const paginationOptions = [
  { value: 2, label: "2" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
];

const MonitoredUrls: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  const data: TableData[] = useMemo(
    () => createData(faker.datatype.number({ min: 25, max: 150 })),
    []
  );

  const columns = useMemo(
    () => [
      {
        id: "urls",
        Header: `${capitalizeFirstLetter(t("urls"))} (${data?.length})`,
        accessor: ({ urls }: TableData) => urls,
        disableSortBy: true,
      },
      {
        id: "http_status",
        Header: capitalizeFirstLetter(t("http_status")),
        accessor: ({ httpStatus }: TableData) => httpStatus,
        disableSortBy: true,
        Cell: ({ value }: CellProps<TableData>) => (
          <Text
            type={"secondary"}
            weight={"bold"}
            color={NEUTRAL_100}
          >
            {value}
          </Text>
        ),
      },
      {
        id: "changes",
        Header: capitalizeFirstLetter(t("changes")),
        accessor: ({ changes }: TableData) => changes,
        Cell: ({ value }: CellProps<TableData>) => (
          <Text
            type={"secondary"}
            weight={"bold"}
            color={NEUTRAL_100}
          >
            {value}
          </Text>
        ),
      },
      {
        id: "response_time",
        Header: capitalizeFirstLetter(t("response_time")),
        accessor: ({ responseTime }: TableData) => responseTime,
        Cell: ({ value }: CellProps<TableData>) => (
          <Text
            type={"secondary"}
            weight={"bold"}
            color={NEUTRAL_100}
          >
            {value}
          </Text>
        ),
      },
      {
        id: "page_load",
        Header: capitalizeFirstLetter(t("page_load")),
        accessor: ({ pageLoad }: TableData) => pageLoad,
        Cell: ({ value }: CellProps<TableData>) => (
          <Text
            type={"secondary"}
            weight={"bold"}
            color={NEUTRAL_100}
          >
            {value}
          </Text>
        ),
      },
      {
        id: "page_size",
        Header: capitalizeFirstLetter(t("page_size")),
        accessor: ({ pageSize }: TableData) => pageSize,
        Cell: ({ value }: CellProps<TableData>) => (
          <Text
            type={"secondary"}
            weight={"bold"}
            color={NEUTRAL_100}
          >
            {value}
          </Text>
        ),
      },
    ],
    [t]
  );

  return (
    <Table
      columns={columns}
      data={data}
      withPagination
      paginationOptions={paginationOptions}
    />
  );
});

export default MonitoredUrls;