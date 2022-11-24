import { css } from "styled-components/macro";

import { LabelPositions } from "@/ui-kit/components/label/types";
import { RGWrapperProps } from "../../types";


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

const RGWrapper = css<RGWrapperProps>`
  display: inline-flex;
  margin: ${({ margin }) => margin};
  gap: ${({ withLabel }) => withLabel ? "5px" : 0};
  flex-direction: ${({ labelPosition }) => LabelPositionRecord[labelPosition]};
  align-items: ${({ labelPosition }) => LabelPositionAlignRecord[labelPosition]};
`

export const radioGroup = {
  RGWrapper,
};
