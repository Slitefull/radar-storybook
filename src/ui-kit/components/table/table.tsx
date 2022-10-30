import { FC, Fragment, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Column, useBlockLayout, usePagination, useTable } from "react-table"
import Dropdown from "@/ui-kit/components/dropdowns/dropdown/dropdown";
import Pagination from "@/ui-kit/components/pagination/pagination";

import { DropdownWrapper, STable, TBody, TCell, TFooter, THeader, THeaderElement, THeaderRow, TRow } from "./styled";


interface TableProps {
  columns: Array<Column<any>>;
  data: Array<object>;
  withPagination?: boolean;
}

const DEFAULT_PAGE_SIZE = 10;

const Table: FC<TableProps> = memo(({ columns, data, withPagination }): JSX.Element => {
  const { t } = useTranslation();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: DEFAULT_PAGE_SIZE },
    },
    useBlockLayout,
    usePagination,
  );

  const paginationOptions = useMemo(
    () => [
      { value: "5", label: "5" },
      { value: "10", label: "10" },
      { value: "15", label: "15" },
    ],
    []
  );

  return (
    <Fragment>
      <STable {...getTableProps()}>
        <THeader>
          {headerGroups.map(headerGroup => (
            <THeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <THeaderElement {...column.getHeaderProps()}>
                  {column.render("Header")}
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
                label={t("changes_per_page")}
                labelPosition={"right"}
                defaultValue={{ value: DEFAULT_PAGE_SIZE, label: DEFAULT_PAGE_SIZE }}
              />
            </DropdownWrapper>

            <Pagination
              onPageChange={(page) => gotoPage((page as number) - 1)}
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
