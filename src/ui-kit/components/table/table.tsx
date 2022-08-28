import { FC, Fragment, memo } from 'react';
import { Column, useBlockLayout, usePagination, useTable } from 'react-table'

import { STable, TBody, TCell, TFooter, THeader, THeaderElement, THeaderRow, TRow } from './styled';


interface TableProps {
  columns: Array<Column<any>>;
  data: Array<object>;
  withPagination?: boolean;
}

const Table: FC<TableProps> = memo(({ columns, data, withPagination }): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
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
    },
    useBlockLayout,
    usePagination,
  )

  return (
    <Fragment>
      <STable {...getTableProps()}>
        <THeader>
          {headerGroups.map(headerGroup => (
            <THeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <THeaderElement {...column.getHeaderProps()}>
                  {column.render('Header')}
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
                {row.cells.map(cell => (
                  <TCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TCell>
                ))}
              </TRow>
            )
          })}
        </TBody>

        <TFooter>
          {withPagination && (
            <div className="pagination">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>
              {' '}
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
              </button>
              {' '}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
              </button>
              {' '}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>
              {' '}
              <span>
          Page{' '}
                <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
              <span>
          | Go to page:{' '}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                  }}
                />
        </span>{' '}
              <select
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}
              >
                {[5, 10, 20, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          )}
        </TFooter>
      </STable>
    </Fragment>
  )
});

export default Table;
