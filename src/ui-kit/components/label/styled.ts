import styled, { css } from "styled-components";

import { SLabelProps } from "./types";


export const SLabel = styled.p<SLabelProps>` && {
  ${({ theme }) => css`${theme.components.label.SLabel}`}
}`;
