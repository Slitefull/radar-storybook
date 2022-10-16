import styled, { css } from "styled-components";

import { SLineSeparatorProps } from "./types";


export const SLineSeparator = styled.hr<SLineSeparatorProps>` && {
  ${({ theme }) => css`${theme.components.lineSeparator.SLineSeparator}`}
}`;
