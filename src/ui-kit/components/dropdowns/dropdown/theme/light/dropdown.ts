import { css } from "styled-components/macro";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { WithLabelWrapperProps } from "../../types";


type LabelPositions = "top" | "right" | "bottom" | "left";

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

const WithLabelWrapper = css<WithLabelWrapperProps>`
  display: inline-flex;
  flex-direction: ${({ labelPosition}) => LabelPositionRecord[labelPosition]};
  align-items: ${({ labelPosition }) => LabelPositionAlignRecord[labelPosition]};
  gap: ${({ withLabel }) => withLabel ? "0 20px" : "0"};
  width: ${({ width = "fit-content" }) => width};
`

const Label = css`
  font-family: 'Menlo', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
`

export const dropdown = {
  WithLabelWrapper,
  Label,
}
