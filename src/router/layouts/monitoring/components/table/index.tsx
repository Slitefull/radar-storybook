import { FC, Fragment, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { createData } from "./__mock__/data";
import faker from "faker";
import Dropdown from "@/ui-kit/components/controls/dropdown";
import Input from "@/ui-kit/components/controls/text";
import Table from "@/ui-kit/components/generals/table";
import SearchIcon from "@/ui-kit/customized-icons/search";
import Severity from "@/ui-kit/components/typography/severity";
import TargetURL from "./components/target-url";

import { SelectOption } from "@/ui-kit/types/select";
import { Severities } from '@/ui-kit/types/severities';
import { Statuses } from '@/ui-kit/types/statuses';
import { Column, Row } from "@/global.css";
import { Changes } from "../../styled";
import RadioGroup from "@/ui-kit/components/controls/radio-group";
import Meridian from "@/ui-kit/components/controls/meridian";
import { CellProps } from "react-table";
import Button from "@/ui-kit/components/buttons/button";
import { MANAGE_PAGE } from "@/constants/routes";


interface SeveritiesCell {
  value: Severities;
}

interface TableData {
  id: string | number;
  url: string;
  severity: Severities;
  changes: number;
  status: Statuses;
}

const TARGET_URL_CELL_WIDTH = 300;
const SEVERITY_CELL_WIDTH = 110;
const CHANGES_CELL_WIDTH = 245;
const STATUS_CELL_WIDTH = 100;
const GROUP_BY_DATE_CELL_WIDTH = 250;

const MonitorTable: FC = (): JSX.Element => {
  const { t } = useTranslation();

  const data: TableData[] = useMemo(
    () => createData(faker.datatype.number({ min: 50, max: 120 })),
    [createData]
  );

  const onChangeSortByHandler = useCallback(() => console.log("qwe"), [])

  const sortByOptions = [
    { value: "my_domain", label: "my domain" },
    { value: "my_domain_2", label: "my domain" },
    { value: "my_domain_3", label: "my domain" },
  ];

  const columns = useMemo(
    () => [
      {
        Header: `${capitalizeFirstLetter(t("target_url"))} (${data.length})`,
        accessor: ({ url }: TableData) => url,
        Cell: ({ value }: SeveritiesCell) => <TargetURL link={value} name={value} subtext={"Product page"}/>,
        width: TARGET_URL_CELL_WIDTH,
      },
      {
        Header: capitalizeFirstLetter(t("severity")),
        accessor: ({ severity }: TableData) => severity,
        Cell: ({ value }: SeveritiesCell) => (
          <Severity severity={value} size={"small"}>
            {capitalizeFirstLetter(value)}
          </Severity>
        ),
        width: SEVERITY_CELL_WIDTH,
      },
      {
        Header: capitalizeFirstLetter(t("changes")),
        accessor: ({ changes }: TableData) => changes,
        width: CHANGES_CELL_WIDTH,
        Cell: ({ value }: SeveritiesCell) => (
          <Changes>
            {value}
          </Changes>
        ),
      },
      {
        Header: capitalizeFirstLetter(t("status")),
        accessor: ({ status }: TableData) => status,
        width: STATUS_CELL_WIDTH,
      },
      {
        id: "id",
        Header: (
          <Dropdown
            options={sortByOptions}
            onChange={onChangeSortByHandler}
            placeholder={capitalizeFirstLetter(t("group_by_date"))}
            rounded
            width={"100%"}
          />
        ),
        accessor: ({ id }: TableData) => id,
        Cell: ({ value }: CellProps<TableData>) => (
          <Button
            color={"secondary"}
            size={"small"}
          >
            {capitalizeFirstLetter(t("change_details"))}
          </Button>
        ),
        disableSortBy: true,
        style: { textAlign: "end" }
      },
    ],
    [t]
  );

  const dropdownElements = useMemo(
    () => [{ value: "all_filters", label: capitalizeFirstLetter(t("all_filters")) }],
    [t]
  );

  const onChangeInputHandler = useCallback(
    (value: string) => console.log(value),
    []
  );

  const onChangeSelect = useCallback(
    (option: SelectOption) => console.log(option, 'option'),
    []
  );

  return (
    <Column width={"100%"}>
      <Row
        width={"100%"}
        justify={"space-between"}
        align={"center"}
      >
        <Row gap={12}>
          <Dropdown
            color={"ghost"}
            options={dropdownElements}
            onChange={onChangeSelect}
          />
          <Dropdown
            color={"ghost"}
            options={dropdownElements}
            onChange={onChangeSelect}
            rounded
          />
          <Dropdown
            color={"ghost"}
            options={dropdownElements}
            onChange={onChangeSelect}
            rounded
          />
          <Dropdown
            color={"ghost"}
            options={dropdownElements}
            onChange={onChangeSelect}
            rounded
          />
        </Row>
        <Fragment>
          <Input
            icon={<SearchIcon size={16}/>}
            onChange={(event) => onChangeInputHandler(event.target.value)}
            placeholder={capitalizeFirstLetter(t("search"))}
            withErrors={false}
          />
        </Fragment>
      </Row>
      <Table
        columns={columns}
        data={data}
        withPagination
      />
    </Column>
  );
};

export default MonitorTable;
