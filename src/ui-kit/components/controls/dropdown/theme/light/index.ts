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
  gap: ${({ withLabel }) => withLabel ? "0 20px" : "0"};
  width: ${({ width = "fit-content" }) => width};
  position: relative;
`;

const OptionContainer = css`
  display: flex;
  flex-direction: row;
`;

const SubElementContainer = css`
  position: absolute;
  top: 40px;
  z-index: 999;
`;

export const dropdown = {
  WithLabelWrapper,
  OptionContainer,
  SubElementContainer,
};
