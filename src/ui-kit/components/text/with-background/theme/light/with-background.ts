import { css } from "styled-components/macro";
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { TART_ORANGE, WHITE } from "@/ui-kit/constants/colors";

import { SWithBackgroundTextProps } from "../../types";


const SWithBackgroundText: FlattenInterpolation<ThemedStyledProps<SWithBackgroundTextProps, DefaultTheme>> = css<SWithBackgroundTextProps>`
  font-family: 'Menlo', serif;
  background: ${({ background }) => background || TART_ORANGE};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${({ color }) => color || WHITE};
  width: fit-content;
  padding: ${({ rounded }) => rounded ? "5px" : "2px 4px"};
  border-radius: ${({ rounded }) => rounded ? '50%' : 0};
`

export const withBackgroundText = {
  SWithBackgroundText,
}
