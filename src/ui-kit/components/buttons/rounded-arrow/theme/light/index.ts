import { css } from "styled-components/macro";
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";

import { SRoundedArrowButtonProps } from "../../types";


const SRoundedArrowButton: FlattenInterpolation<ThemedStyledProps<SRoundedArrowButtonProps, DefaultTheme>> = css<SRoundedArrowButtonProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ background }) => background || PRIMARY_60};
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
`;

export const roundedArrow = {
  SRoundedArrowButton
};
