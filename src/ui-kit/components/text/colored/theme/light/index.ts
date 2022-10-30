import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { css } from "styled-components/macro";

import { SColoredTextProps } from "../../types";


type Size = "default" | "small";
type Weight = "default" | "bold";

const FontSizeRecord: Record<Size, string> = {
  "default": "14px",
  "small": "12px",
};

const FontWeightRecord: Record<Weight, number> = {
  "default": 400,
  "bold": 700,
};

const SColoredText: FlattenInterpolation<ThemedStyledProps<SColoredTextProps, DefaultTheme>> = css<SColoredTextProps>`
  font-family: "Menlo", serif;
  font-weight: ${({ weight }) => FontWeightRecord[weight]};
  font-size: ${({ size }) => FontSizeRecord[size]};
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${({ color }) => color};
`;

export const colored = {
  SColoredText,
};
