import { FC, memo, useMemo } from 'react';
import { CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { createData } from "@/pages/manage-domain/layouts/monitored-urls/__mock__";
import { RAISIN_BLACK } from "@/ui-kit/constants/colors";
import faker from "faker";
import Table from "@/ui-kit/components/table";
import ColoredText from "@/ui-kit/components/text/colored";


interface TableData {
  urls: string;
  http_status: number;
  changes: number;
  response_time: number;
  page_load: number;
  page_size: number;
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
        accessor: ({ http_status }: TableData) => http_status,
        disableSortBy: true,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        ),
      },
      {
        id: "changes",
        Header: capitalizeFirstLetter(t("changes")),
        accessor: ({ changes }: TableData) => changes,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        ),
      },
      {
        id: "response_time",
        Header: capitalizeFirstLetter(t("response_time")),
        accessor: ({ response_time }: TableData) => response_time,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        ),
      },
      {
        id: "page_load",
        Header: capitalizeFirstLetter(t("page_load")),
        accessor: ({ page_load }: TableData) => page_load,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        ),
      },
      {
        id: "page_size",
        Header: capitalizeFirstLetter(t("page_size")),
        accessor: ({ page_size }: TableData) => page_size,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
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