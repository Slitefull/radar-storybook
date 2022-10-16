import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { DARK_LAVA, EBONY, PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { SLabelProps } from "../../types";


type LabelColors = "primary" | "ghost" | "subtly";

const primary = css`
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
`;

const ghost = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: ${EBONY};
`;

const subtly = css`
  font-family: 'Menlo', serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`

const LabelColorsRecord: Record<LabelColors, FlattenSimpleInterpolation> = {
  "primary": primary,
  "ghost": ghost,
  "subtly": subtly,
};

const SLabel = css<SLabelProps>` && {
  white-space: nowrap;
  ${({ color = "primary" }) => css`${LabelColorsRecord[color]}`};
}`;

export const label = {
  SLabel,
};
