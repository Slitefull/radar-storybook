import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { css } from "styled-components/macro";
import { DARK_LAVA } from "@/ui-kit/constants/colors";

import { StyledColoredTextProps } from "../../types";


type Size = "default" | "small";
type Weight = "default" | "bold";

const DEFAULT_SIZE = "default";
const DEFAULT_WEIGHT = "default";

const FontSizeRecord: Record<Size, string> = {
  ["default"]: "14px",
  ["small"]: "12px",
};

const FontWeightRecord: Record<Weight, number> = {
  ["default"]: 400,
  ["bold"]: 700,
};

const StyledColoredText: FlattenInterpolation<ThemedStyledProps<StyledColoredTextProps, DefaultTheme>> = css<StyledColoredTextProps>`
  font-family: 'Menlo', serif;
  font-weight: ${({ weight }) => FontWeightRecord[weight || DEFAULT_WEIGHT]};
  font-size: ${({ size }) => FontSizeRecord[size || DEFAULT_SIZE]};
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${({ color }) => color || DARK_LAVA};
`

export const coloredText = {
  StyledColoredText,
}
