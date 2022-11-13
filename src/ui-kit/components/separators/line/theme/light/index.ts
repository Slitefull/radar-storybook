import { css } from "styled-components/macro";

import { SLineSeparatorProps } from "../../types";


type LineTypes = "horizontal" | "vertical";
type Variants = "solid" | "dashed" | "dotted";

const RotateLineRecord: Record<LineTypes, string> = {
  "vertical": "90deg",
  "horizontal": "0deg",
};

const BorderLineRecord: Record<Variants, string> = {
  "solid": "solid",
  "dashed": "dashed",
  "dotted": "dotted",
};

const SLineSeparator = css<SLineSeparatorProps>`
  border: 0;
  transform: rotate(${({ type }) => RotateLineRecord[type]});
  width: ${({ width }) => width};
  border-radius: ${({ radius }) => `${radius}px`};
  border-top: 1px ${({ $color }) => $color};
  border-style: ${({ variant }) => BorderLineRecord[variant]};
`;

export const line = {
  SLineSeparator,
};
