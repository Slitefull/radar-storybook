import styled from "styled-components";
import { css } from "styled-components/macro";

import { SRoundedArrowButtonProps } from "./types";


export const SRoundedArrowButton = styled.button<SRoundedArrowButtonProps>` && {
  ${({ theme }) => css`${theme.components.roundedArrowButton.SRoundedArrowButton}`}
}`
