import styled from "styled-components";

import { PaginationItemProps } from "./types";


export const SPagination = styled.ul`
  ${({ theme }) => theme.components.generals.pagination.SPagination}
`;

export const PaginationItem = styled.li<PaginationItemProps>`
  ${({ theme }) => theme.components.generals.pagination.PaginationItem}
`;
