import { css } from "styled-components/macro";

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

export const dropdownWithTypes = {
  WithLabelWrapper,
}
