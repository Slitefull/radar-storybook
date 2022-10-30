import styled from "styled-components";

import { SRoundedArrowButtonProps } from "./types";


export const SRoundedArrowButton = styled.button<SRoundedArrowButtonProps>`
  ${({ theme }) => theme.components.buttons.roundedArrow.SRoundedArrowButton}
`;
