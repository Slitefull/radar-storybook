import styled from "styled-components";
import { css } from "styled-components/macro";

import { StyledWithBackgroundTextProps } from "./types";


export const StyledWithBackgroundText = styled.p<StyledWithBackgroundTextProps>` && {
  ${({ theme }) => css`${theme.components.withBackgroundText.StyledWithBackgroundText}`}
}`
