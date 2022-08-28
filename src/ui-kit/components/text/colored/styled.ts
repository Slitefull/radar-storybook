import styled from "styled-components";
import { css } from "styled-components/macro";

import { StyledColoredTextProps } from "./types";


export const StyledColoredText = styled.p<StyledColoredTextProps>` && {
  ${({ theme }) => css`${theme.components.coloredText.StyledColoredText}`}
}`
