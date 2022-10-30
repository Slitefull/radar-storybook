import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { DARK_LAVA, EBONY, PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { LabelColors, LabelSizes, SLabelProps } from "../../types";


const primary = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
`;

const secondary = css`
  font-family: 'FreightSans Pro', serif;
  font-weight: 400;
  line-height: 18px;
  color: ${DARK_LAVA};
`;

const ghost = css`
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${EBONY};
`;

const subtly = css`
  font-family: "Menlo", serif;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`;

const LabelColorsRecord: Record<LabelColors, FlattenSimpleInterpolation> = {
  "primary": primary,
  "secondary": secondary,
  "ghost": ghost,
  "subtly": subtly,
};

const LabelSizesRecord: Record<LabelSizes, string> = {
  "small": "12px",
  "default": "14px",
  "big": "18px",
};

const SLabel = css<SLabelProps>`
  display: flex;
  align-items: center;
  white-space: ${({ wrap }) => wrap ? "inherit" : "nowrap"};
  font-size: ${({ size }) => LabelSizesRecord[size]};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  transition: .2s color, .2s font-size, .2s font-weight, .2s line-height;
  
  ${({ color = "primary" }) => css`${LabelColorsRecord[color]}`};

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const label = {
  SLabel,
};
