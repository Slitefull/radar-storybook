import { css } from "styled-components/macro";

import { LabelPositions, LabelSizes, LabelWeights, SLabelProps } from "../../types";


const LabelSizesRecord: Record<LabelSizes, string> = {
  "small": "12px",
  "default": "14px",
  "big": "18px",
};

const LabelWeightsRecord: Record<LabelWeights, string> = {
  "default": "400",
  "bold": "700",
};

const LabelPositionRecord: Record<LabelPositions, string> = {
  "top": "column",
  "right": "row-reverse",
  "bottom": "column-reverse",
  "left": "row",
};

const LabelPositionAlignRecord: Record<LabelPositions, string> = {
  "top": "flex-start",
  "right": "center",
  "bottom": "flex-start",
  "left": "center",
};

const SLabel = css<SLabelProps>`
  display: inline-flex;
  gap: 5px;
  flex-direction: ${({ position }) => LabelPositionRecord[position]};
  align-items: ${({ position }) => LabelPositionAlignRecord[position]};
  letter-spacing: -0.02em;
  line-height: 18px;
  white-space: ${({ $wrap }) => $wrap ? "inherit" : "nowrap"};
  font-size: ${({ size }) => LabelSizesRecord[size]};
  font-weight: ${({ weight }) => LabelWeightsRecord[weight]};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  color: ${({ color }) => color};
  transition: .2s color, .2s font-size, .2s font-weight, .2s line-height;

  ${({ withHover }) => withHover && css`
    &:hover {
      opacity: .7;
      transition: .2s color, .2s font-size, .2s font-weight, .2s line-height, .2s opacity;
    }
  `}
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const label = {
  SLabel,
};
