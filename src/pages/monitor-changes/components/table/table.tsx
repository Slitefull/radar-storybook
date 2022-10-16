import { FC, Fragment, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { DARK_GREY, MEDIUM_PURPLE, VIOLET } from "@/ui-kit/constants/colors";
import { mockData } from "./__mock__/data";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Dropdown from "@/ui-kit/components/dropdowns/dropdown/dropdown";
import Input from "@/ui-kit/components/inputs/text/text";
import Table from "@/ui-kit/components/table/table";
import WithBackgroundText from "@/ui-kit/components/text/with-background/with-background";
import SearchIcon from "@/ui-kit/customized-icons/search/search";

import { SMonitorTable, TControls, TDropdowns } from '../../styled';


type Severities = "Critical" | "High" | "Medium";
type Statuses = "Resolved" | "Unresolved";
type SelectOption = { value: string | number; label: string | number };

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

const TARGET_URL_CELL_WIDTH = 300;
const SEVERITY_CELL_WIDTH = 110;
const CHANGES_CELL_WIDTH = 245;
const STATUS_CELL_WIDTH = 100;
const GROUP_BY_DATE_CELL_WIDTH = 250;

const SeverityColorsRecord: Record<Severities, Color> = {
  "Critical": VIOLET,
  "High": MEDIUM_PURPLE,
  "Medium": DARK_GREY,
};

const MonitorTable: FC = (): JSX.Element => {
  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      {
        Header: capitalizeFirstLetter(t("target_url")),
        accessor: ({ url }: TableData) => url,
        width: TARGET_URL_CELL_WIDTH,
      },
      {
        Header: capitalizeFirstLetter(t("severity")),
        accessor: ({ severity }: TableData) => severity,
        Cell: ({ value }: SeveritiesCell) => (
          <WithBackgroundText background={SeverityColorsRecord[value]}>
            {value}
          </WithBackgroundText>
        ),
        width: SEVERITY_CELL_WIDTH,
      },
      {
        Header: capitalizeFirstLetter(t("changes")),
        accessor: ({ changes }: TableData) => changes,
        width: CHANGES_CELL_WIDTH,
      },
      {
        Header: capitalizeFirstLetter(t("status")),
        accessor: ({ status }: TableData) => status,
        width: STATUS_CELL_WIDTH,
      },
      {
        Header: capitalizeFirstLetter(t("group_by_date")),
        accessor: ({ group_by_date }: TableData) => group_by_date,
        width: GROUP_BY_DATE_CELL_WIDTH,
      },
    ],
    [t]
  );

  const data: TableData[] = useMemo(
    () => mockData,
    []
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
    <SMonitorTable>
      <TControls>
        <TDropdowns>
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
        </TDropdowns>
        <Fragment>
          <Input
            icon={<SearchIcon size={16}/>}
            onChange={(event) => onChangeInputHandler(event.target.value)}
          />
        </Fragment>
      </TControls>
      <Table
        columns={columns}
        data={data}
        withPagination
      />
    </SMonitorTable>
  );
};

export default MonitorTable;
