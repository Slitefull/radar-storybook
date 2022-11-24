import { FC, memo, useMemo } from 'react';
import { CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createData } from "@/pages/manage/components/table/__mock__";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { DARK_LAVA, FOREST_GREEN_WEB, RAISIN_BLACK } from "@/ui-kit/constants/colors";
import { MANAGE_PAGE } from "@/constants/routes";
import Table from "@/ui-kit/components/table";
import faker from "faker";
import ColoredText from "@/ui-kit/components/text/colored";
import RadioGroup from "@/ui-kit/components/inputs/radio-group";
import Meridian from "@/ui-kit/components/inputs/meridian";
import Button from "@/ui-kit/components/buttons/button";


interface TableData {
  id: string | number;
  domains: string;
  display_name: string;
  groups: string;
  urls: number;
  weekly_crawls: number;
  credits_used: number;
  isSearchConsole: boolean;
}

const paginationOptions = [
  { value: 2, label: "2" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
];

const DomainUrlsTable: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const data: TableData[] = useMemo(
    () => createData(faker.datatype.number({ min: 25, max: 150 })),
    []
  );

  const columns = useMemo(
    () => [
      {
        id: "domains",
        Header: `${capitalizeFirstLetter(t("domains"))} (${data?.length})`,
        accessor: ({ domains }: TableData) => domains,
      },
      {
        id: "display_name",
        Header: capitalizeFirstLetter(t("display_name")),
        accessor: ({ display_name }: TableData) => display_name,
      },
      {
        id: "urls",
        Header: capitalizeFirstLetter(t("urls")),
        accessor: ({ urls }: TableData) => urls,
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
        id: "groups",
        Header: capitalizeFirstLetter(t("groups")),
        accessor: ({ groups }: TableData) => groups,
      },
      {
        id: "weekly_crawls",
        Header: capitalizeFirstLetter(t("weekly_crawls")),
        accessor: ({ weekly_crawls }: TableData) => weekly_crawls,
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
        id: "credits_used",
        Header: capitalizeFirstLetter(t("credits_used")),
        accessor: ({ credits_used }: TableData) => credits_used,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        )
      },
      {
        id: "search_console",
        Header: capitalizeFirstLetter(t("search_console")),
        accessor: ({ isSearchConsole }: TableData) => isSearchConsole,
        Cell: ({ value }: CellProps<TableData>) => (
          value
            ? (
              <ColoredText type={"secondary"} weight={"bold"} color={FOREST_GREEN_WEB} size={"small"}>
                {capitalizeFirstLetter(t("enabled"))}
              </ColoredText>
            )
            : (
              <ColoredText type={"secondary"} weight={"default"} color={DARK_LAVA} size={"small"}>
                {capitalizeFirstLetter(t("disabled"))}
              </ColoredText>
            )
        ),
        disableSortBy: true,
      },
      {
        id: "id",
        Header: (
          <RadioGroup margin={"0 0 0 auto"}>
            <Meridian
              name={"meridian"}
              label={"AM"}
              onChange={() => console.log("qwe")}
            />
            <Meridian
              name={"meridian"}
              label={"PM"}
              onChange={() => console.log("qwe")}
            />
          </RadioGroup>
        ),
        accessor: ({ id }: TableData) => id,
        Cell: ({ value }: CellProps<TableData>) => (
          <Button
            color={"secondary"}
            size={"small"}
            onClick={() => navigate(`${MANAGE_PAGE}/${value}`)}
          >
            {capitalizeFirstLetter(t("settings"))}
          </Button>
        ),
        disableSortBy: true,
        style: { textAlign: "end" }
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

export default DomainUrlsTable;