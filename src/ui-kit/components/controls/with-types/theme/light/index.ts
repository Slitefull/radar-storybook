import { css } from "styled-components/macro";

import { LabelPositions } from "@/ui-kit/components/typography/label/types";
import { WithLabelWrapperProps } from "../../types";


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
  flex-direction: ${({ labelPosition }) => LabelPositionRecord[labelPosition]};
  align-items: ${({ labelPosition }) => LabelPositionAlignRecord[labelPosition]};
  gap: ${({ withLabel }) => withLabel ? "5px" : "0"};
  width: ${({ width = "fit-content" }) => width};
`;

export const withTypes = {
  WithLabelWrapper,
};
