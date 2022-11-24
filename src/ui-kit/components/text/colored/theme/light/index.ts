import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { css } from "styled-components/macro";

import { SColoredTextProps } from "../../types";


type Size = "default" | "big" | "small";
type Weight = "default" | "bold";
type Types = "primary" | "secondary";

const FontSizeRecord: Record<Size, string> = {
  "small": "12px",
  "default": "14px",
  "big": "18px",
};

const FontWeightRecord: Record<Weight, number> = {
  "default": 400,
  "bold": 700,
};

const TypesRecord: Record<Types, string> = {
  "primary": "FreightSans Pro",
  "secondary": "Menlo",
};

const SColoredText: FlattenInterpolation<ThemedStyledProps<SColoredTextProps, DefaultTheme>> = css<SColoredTextProps>`
  font-family: ${({ type }) => TypesRecord[type]}, serif;
  font-weight: ${({ weight }) => FontWeightRecord[weight]};
  font-size: ${({ size }) => FontSizeRecord[size]};
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  margin: ${({ margin }) => margin};
`;

export const colored = {
  SColoredText,
};
