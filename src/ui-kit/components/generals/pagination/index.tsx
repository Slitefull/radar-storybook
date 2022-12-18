import { FC, memo } from "react";
import { DOTS, usePagination } from "@/ui-kit/hooks/usePagination";
import ArrowIcon from "@/ui-kit/customized-icons/arrow";
import { NEUTRAL_100 } from "@/ui-kit/constants/colors";

import { PaginationItem, SPagination } from "./styled";


interface PaginationProps {
  onPageChange: (page: number | string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPrevious: VoidFunction;
  onNext: VoidFunction;
  canPreviousPage: boolean;
  canNextPage: boolean;
}

const Pagination: FC<PaginationProps> = memo((
  {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    onPrevious,
    onNext,
    canPreviousPage,
    canNextPage,
  }
): JSX.Element => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  return (
    <SPagination>
      <PaginationItem
        disabled={!canPreviousPage}
        onClick={onPrevious}
      >
        <ArrowIcon
          rotation={"left"}
          color={NEUTRAL_100}
          size={7}
        />
      </PaginationItem>
      {paginationRange!.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem
              key={index}
              className="pagination-item dots"
            >
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        disabled={!canNextPage}
        onClick={onNext}
      >
        <ArrowIcon
          rotation={"right"}
          color={NEUTRAL_100}
          size={7}
        />
      </PaginationItem>
    </SPagination>
  );
});

export default Pagination;
