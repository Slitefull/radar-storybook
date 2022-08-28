import { FC, Fragment, lazy, Suspense, useCallback, useMemo } from 'react';
import { DARK_GREY, MEDIUM_PURPLE, VIOLET } from "@/ui-kit/constants/colors";
import { mockData } from "./__mock__/data";

import { SMonitorTable, TControls, TDropdowns } from "./styled";


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

const Table = lazy(() => import('@/ui-kit/components/table/table'));
const Dropdown = lazy(() => import("@/ui-kit/components/dropdowns/dropdown/dropdown"));
const Input = lazy(() => import("@/ui-kit/components/inputs/text/text"));
const WithBackgroundText = lazy(() => import("@/ui-kit/components/text/with-background/with-background"));

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
  const columns = useMemo(
    () => [
      {
        Header: 'Target URL',
        accessor: ({ url }: TableData) => url,
        width: TARGET_URL_CELL_WIDTH,
      },
      {
        Header: 'Severity',
        accessor: 'severity',
        Cell: ({ value }: SeveritiesCell) => (
          <WithBackgroundText background={SeverityColorsRecord[value]}>
            {value}
          </WithBackgroundText>
        ),
        width: SEVERITY_CELL_WIDTH,
      },
      {
        Header: 'Changes',
        accessor: ({ changes }: TableData) => changes,
        width: CHANGES_CELL_WIDTH,
      },
      {
        Header: 'Status',
        accessor: ({ status }: TableData) => status,
        width: STATUS_CELL_WIDTH,
      },
      {
        Header: 'Group by date',
        accessor: ({ group_by_date }: TableData) => group_by_date,
        width: GROUP_BY_DATE_CELL_WIDTH,
      },
    ],
    []
  );

  const data: TableData[] = useMemo(
    () => mockData,
    []
  );

  const dropdownElements = useMemo(
    () => [{ key: "all_filters", label: "All filters" }],
    []
  );

  const onChangeInputHandler = useCallback(
    (value: string) => console.log(value),
    []
  );

  return (
    <Suspense fallback={<div>Table loading...</div>}>
      <SMonitorTable>
        <TControls>
          <TDropdowns>
            <Dropdown elements={dropdownElements} color={"ghost"}/>
            <Dropdown elements={dropdownElements} color={"ghost"} rounded/>
            <Dropdown elements={dropdownElements} color={"ghost"} rounded/>
            <Dropdown elements={dropdownElements} color={"ghost"} rounded/>
          </TDropdowns>
          <Fragment>
            <Input
              withIcon
              placeholder={"Search"}
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
    </Suspense>
  );
};

export default MonitorTable;
