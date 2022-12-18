import { css } from "styled-components/macro";
import {
  SUPPORT_2_60,
  NEUTRAL_90,
  NEUTRAL_30,
  PRIMARY_60,
  NEUTRAL_100,
  SUPPORT_2_50,
  NEUTRAL_00
} from "@/ui-kit/constants/colors";

import { LabelPositions } from "@/ui-kit/components/typography/label/types";
import { SFormInputProps, TextInputWrapperProps, WithIconWrapperProps } from "../../types";


type IconPosition = "left" | "right";
type InputSize = "default" | "small";

enum InputStates {
  default = "default",
  hover = "hover",
  active = "active",
  error = "error",
}

const InputStatesRecord: Record<InputStates, string> = {
  [InputStates.default]: NEUTRAL_30,
  [InputStates.hover]: NEUTRAL_90,
  [InputStates.active]: PRIMARY_60,
  [InputStates.error]: SUPPORT_2_50,
};

const IconPositionRecord: Record<IconPosition, string> = {
  "left": "row",
  "right": "row-reverse",
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

const SFormInputRecord: Record<InputSize, string> = {
  "default": "38px",
  "small": "33px",
};

const getInputState = (isHovered: boolean, hasError: boolean) => {
  if (isHovered) {
    return InputStatesRecord[InputStates.hover];
  }
  if (hasError) {
    return InputStatesRecord[InputStates.error];
  }

  return InputStatesRecord[InputStates.default];
};

const getInputPadding = (withIcon: boolean, iconPosition: IconPosition): string => {
  if (withIcon) {
    if (iconPosition === "left") {
      return "0 0 0 12px";
    }

    if (iconPosition === "right") {
      return "0 12px 0 0";
    }
  }

  return "0"
};

const TextInputWrapper = css<TextInputWrapperProps>`
  display: flex;
  flex-direction: ${({ labelPosition }) => LabelPositionRecord[labelPosition]};
  align-items: ${({ labelPosition }) => LabelPositionAlignRecord[labelPosition]};
  gap: ${({ withLabel }) => withLabel ? "5px 0" : 0};
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  opacity: ${({ disabled }) => disabled ? .3 : 1};
  transition: .2s opacity ease-in;
  max-width: ${({ full }) => full ? "100%" : "350px"};
  width: ${({ width }) => width};
`;

const WithIconWrapper = css<WithIconWrapperProps>`
  display: flex;
  flex-direction: ${({ iconPosition }) => IconPositionRecord[iconPosition]};
  align-items: center;
  border: 1px solid ${({ isHovered, hasError }) => getInputState(isHovered, hasError)};
  background: ${NEUTRAL_00};
  transition: .2s border ease-in;
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;

  &:focus-within {
    border: 1px solid ${({ hasError }) => InputStatesRecord[hasError ? InputStates.error : InputStates.active]};
  }
`;

//TODO Record
const SFormInput = css<SFormInputProps>`
  font-family: "Menlo", serif;
  font-size: 14px;
  font-weight: 400;
  color: ${NEUTRAL_100};
  outline: none;
  padding: ${({ iconPosition, withIcon }) => getInputPadding(withIcon, iconPosition)};
  height: ${({ inputSize }) => SFormInputRecord[inputSize]};
  border: none;
  border-radius: 8px;
  width: 100%;

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

const HelperText = css`
  font-size: 14px;
  font-weight: 400;
  color: ${SUPPORT_2_60};
  margin: 0 0 0 auto;
  height: 15px;
`;

export const text = {
  TextInputWrapper,
  WithIconWrapper,
  SFormInput,
  HelperText,
};
