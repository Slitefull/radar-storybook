import { DefaultTheme, FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
import { css } from "styled-components/macro";
import {
  NEUTRAL_90,
  NEUTRAL_30,
  PRIMARY_60,
  NEUTRAL_100,
  SUPPORT_2_50,
  VENETIAN_RED,
  NEUTRAL_00
} from "@/ui-kit/constants/colors";

import { LabelPositions } from "@/ui-kit/components/typography/label/types";
import { STextareaProps, TextareaWrapperProps } from "../../types";


enum TextareaStates {
  default = "default",
  hover = "hover",
  active = "active",
  error = "error",
}

const TextareaStatesRecord: Record<TextareaStates, string> = {
  [TextareaStates.default]: NEUTRAL_30,
  [TextareaStates.hover]: NEUTRAL_90,
  [TextareaStates.active]: PRIMARY_60,
  [TextareaStates.error]: SUPPORT_2_50,
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

const getTextareaState = (isHovered: boolean, hasError: boolean) => {
  if (isHovered) {
    return TextareaStatesRecord[TextareaStates.hover];
  }

  if (hasError) {
    return TextareaStatesRecord[TextareaStates.error];
  }

  return TextareaStatesRecord[TextareaStates.default];
};

const TextareaWrapper = css<TextareaWrapperProps>`
  width: 100%;
  max-width: ${({ full }) => full ? "100%" : "350px"};
  display: flex;
  flex-direction: ${({ labelPosition }) => LabelPositionRecord[labelPosition]};
  align-items: ${({ labelPosition }) => LabelPositionAlignRecord[labelPosition]};
  gap: 5px 0;
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  opacity: ${({ disabled }) => disabled ? .3 : 1};
  transition: .2s opacity ease-in;
`;

const STextarea: FlattenInterpolation<ThemedStyledProps<STextareaProps, DefaultTheme>> = css<STextareaProps>`
  font-family: "Menlo", serif;
  font-size: 14px;
  font-weight: 400;
  padding: 12px;
  color: ${NEUTRAL_100};
  border-radius: 8px;
  outline: none;
  transition: .2s border ease-in;
  border: 1px solid ${({ isHovered, hasError }) => getTextareaState(isHovered, hasError)};
  background: ${NEUTRAL_00};
  width: 100%;
  height: 100px;

  &:focus {
    border: 1px solid ${({ hasError }) => TextareaStatesRecord[hasError ? TextareaStates.error : TextareaStates.active]};
  }
`;

const HelperText: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 11px;
  font-weight: 400;
  color: ${VENETIAN_RED};
`;

export const textarea = {
  TextareaWrapper,
  STextarea,
  HelperText,
};
