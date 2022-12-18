import { css } from "styled-components/macro";

import { CWrapperProps } from "../../types";
import { LabelPositions } from "@/ui-kit/components/typography/label/types";


const LabelPositionRecord: Record<LabelPositions, string> = {
  "top": "column",
  "right": "row-reverse",
  "bottom": "column-reverse",
  "left": "row",
};

const LabelPositionAlignRecord: Record<LabelPositions, string> = {
  "top": "flex-start",
  "right": "flex-start",
  "bottom": "flex-start",
  "left": "center",
};

const CWrapper = css<CWrapperProps>`
  display: inline-flex;
  gap: 5px;
  flex-direction: ${({ labelPosition }) => LabelPositionRecord[labelPosition]};
  align-items: ${({ labelPosition }) => LabelPositionAlignRecord[labelPosition]};
`;

const SCheckbox = css` && {
}`;

export const checkbox = {
  CWrapper,
  SCheckbox,
};
