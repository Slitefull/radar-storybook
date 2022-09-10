import { css } from "styled-components/macro";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { WithLabelWrapperProps } from "../../types";


type LabelPosition = "left" | "right";

const DEFAULT_LABEL_POSITION = "left";

const LabelPositionRecord: Record<LabelPosition, string> = {
  "left": "row",
  "right": "row-reverse",
}

const WithLabelWrapper = css<WithLabelWrapperProps>`
  display: inline-flex;
  flex-direction: ${({ labelPosition }) => LabelPositionRecord[labelPosition || DEFAULT_LABEL_POSITION]};
  align-items: center;
  gap: ${({ withLabel }) => withLabel ? "0 20px" : "0"};
  width: fit-content;
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
