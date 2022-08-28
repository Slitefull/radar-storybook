import styled from "styled-components";
import { css } from "styled-components/macro";


export const STable = styled.table` && {
  ${({ theme }) => css`${theme.components.table.STable}`}
}`;

export const THeader = styled.div` && {
  ${({ theme }) => css`${theme.components.table.THeader}`}
}`;

export const TBody = styled.div` && {
  ${({ theme }) => css`${theme.components.table.TBody}`}
}`;

export const TFooter = styled.div` && {
  ${({ theme }) => css`${theme.components.table.TFooter}`}
}`;

export const THeaderRow = styled.div` && {
  ${({ theme }) => css`${theme.components.table.THeaderRow}`}
}`;

export const THeaderElement = styled.div` && {
  ${({ theme }) => css`${theme.components.table.THeaderElement}`}
}`;

export const TRow = styled.div` && {
  ${({ theme }) => css`${theme.components.table.TRow}`}
}`;

export const TCell = styled.div` && {
  ${({ theme }) => css`${theme.components.table.TCell}`}
}`;
