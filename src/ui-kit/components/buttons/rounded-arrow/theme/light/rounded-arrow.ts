import { css } from "styled-components/macro";
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";

import { StyledRoundedArrowButtonProps } from "../../types";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


const StyledRoundedArrowButton: FlattenInterpolation<ThemedStyledProps<StyledRoundedArrowButtonProps, DefaultTheme>> = css<StyledRoundedArrowButtonProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ background }) => background || PLUMP_PURPLE};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => disabled ? .3 : 1};
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  transition: .3s opacity;

  &:hover {
    opacity: ${({ disabled }) => disabled ? .3 : .6};
    transition: .3s opacity;
  }
`

export const roundedArrowButton = {
  StyledRoundedArrowButton
}
