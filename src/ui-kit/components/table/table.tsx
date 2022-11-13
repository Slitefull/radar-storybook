import { FC, Fragment, memo } from "react";
import { useTranslation } from "react-i18next";
import { Column, useBlockLayout, usePagination, useSortBy, useTable } from "react-table"
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";
import SortIcon from "@/ui-kit/customized-icons/sort/sort";
import Dropdown from "@/ui-kit/components/dropdowns/dropdown/dropdown";
import Pagination from "@/ui-kit/components/pagination/pagination";

import { DropdownWrapper, STable, TBody, TCell, TFooter, THeader, THeaderElement, THeaderRow, TRow } from "./styled";
import { LabelSizes, LabelTypes } from "@/ui-kit/components/label/types";


type PaginationOption = {
  value: number;
  label: string;
}

interface TableProps {
  columns: Array<Column<any>>;
  data: Array<object>;
  withPagination?: boolean;
  paginationOptions?: PaginationOption[];
  paginationLabel?: string;
  paginationLabelType?: LabelTypes;
  paginationLabelSize?: LabelSizes;
  paginationLabelColor?: Color;
}

const DEFAULT_PAGINATION_OPTIONS = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
];

const Table: FC<TableProps> = memo((
  {
    columns,
    data,
    withPagination,
    paginationOptions = DEFAULT_PAGINATION_OPTIONS,
    paginationLabel = "changes_per_page",
    paginationLabelType,
    paginationLabelSize,
    paginationLabelColor,
  }
): JSX.Element => {
  const { t } = useTranslation();

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: paginationOptions[0].value },
    },
    useBlockLayout,
    useSortBy,
    usePagination,
  );

  return (
    <Fragment>
      <STable {...getTableProps()}>
        <THeader>
          {headerGroups.map((headerGroup) => (
            <THeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <THeaderElement{...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <SortIcon
                      size={30}
                      color={column.isSortedDesc ? PLUMP_PURPLE : undefined}
                      rotation={column.isSortedDesc ? "left" : "right"}
                    />
                  )}
                </THeaderElement>
              ))}
            </THeaderRow>
          ))}
        </THeader>

        <TBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <TRow {...row.getRowProps()} key={i}>
                {row.cells.map((cell) => (
                  <TCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TCell>
                ))}
              </TRow>
            )
          })}
        </TBody>

        {withPagination && (
          <TFooter>
            <DropdownWrapper>
              <Dropdown
                color={"ghost"}
                options={paginationOptions}
                onChange={(option) => setPageSize(option.value)}
                label={capitalizeFirstLetter(t(paginationLabel))}
                labelSize={paginationLabelSize}
                labelColor={paginationLabelColor}
                labelType={paginationLabelType}
                labelPosition={"right"}
                defaultValue={{ value: paginationOptions[0].value, label: paginationOptions[0].value }}
              />
            </DropdownWrapper>

            <Pagination
              onPageChange={(page) => gotoPage((page as number - 1))}
              currentPage={pageIndex + 1}
              onPrevious={previousPage}
              onNext={nextPage}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              pageSize={pageSize}
              totalCount={pageSize * pageCount}
              siblingCount={1}
            />
          </TFooter>
        )}
      </STable>
    </Fragment>
  )
});

export default Table;
