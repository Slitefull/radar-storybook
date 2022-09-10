import styled from "styled-components";
import { css } from "styled-components/macro";

import { PaginationItemProps } from "./types";


export const SPagination = styled.ul` && {
  ${({ theme }) => css`${theme.components.pagination.SPagination}`}
}`;

export const PaginationItem = styled.li<PaginationItemProps>` && {
  ${({ theme }) => css`${theme.components.pagination.PaginationItem}`}
}`;
