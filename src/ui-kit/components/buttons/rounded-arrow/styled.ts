import styled from "styled-components";
import { css } from "styled-components/macro";

import { StyledRoundedArrowButtonProps } from "./types";


export const StyledRoundedArrowButton = styled.button<StyledRoundedArrowButtonProps>` && {
  ${({ theme }) => css`${theme.components.roundedArrowButton.StyledRoundedArrowButton}`}
}`
