import { DefaultTheme, FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
import { css } from "styled-components/macro";
import {
  DARK_LAVA,
  LIGHT_GREY,
  PLUMP_PURPLE,
  RAISIN_BLACK,
  TART_ORANGE,
  VENETIAN_RED,
  WHITE
} from "@/ui-kit/constants/colors";

import { LabelPositions } from "@/ui-kit/components/label/types";
import { STextareaProps, TextareaWrapperProps } from "../../types";


enum TextareaStates {
  default = "default",
  hover = "hover",
  active = "active",
  error = "error",
}

const TextareaStatesRecord: Record<TextareaStates, string> = {
  [TextareaStates.default]: LIGHT_GREY,
  [TextareaStates.hover]: DARK_LAVA,
  [TextareaStates.active]: PLUMP_PURPLE,
  [TextareaStates.error]: TART_ORANGE,
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
  color: ${RAISIN_BLACK};
  border-radius: 8px;
  outline: none;
  transition: .2s border ease-in;
  border: 1px solid ${({ isHovered, hasError }) => getTextareaState(isHovered, hasError)};
  background: ${WHITE};
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
