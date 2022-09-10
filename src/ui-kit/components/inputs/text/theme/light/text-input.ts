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

import { TextInputWrapperProps, WithIconWrapperProps } from "../../types";


type IconPosition = "start" | "end";

enum InputStates {
  default = "default",
  hover = "hover",
  active = "active",
  error = "error",
}

const InputStatesRecord: Record<InputStates, string> = {
  [InputStates.default]: LIGHT_GREY,
  [InputStates.hover]: DARK_LAVA,
  [InputStates.active]: PLUMP_PURPLE,
  [InputStates.error]: TART_ORANGE,
};

const IconPositionRecord: Record<IconPosition, string> = {
  "start": "row",
  "end": "row-reverse",
};

const DEFAULT_ICON_POSITION = "start";

const getInputState = (isHovered: boolean, hasError: boolean) => {
  if (isHovered) {
    return InputStatesRecord[InputStates.hover];
  }
  if (hasError) {
    return InputStatesRecord[InputStates.error];
  }

  return InputStatesRecord[InputStates.default];
}

const TextInputWrapper = css<TextInputWrapperProps>`
  display: flex;
  flex-direction: column;
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  opacity: ${({ disabled }) => disabled ? .3 : 1};
  transition: .2s opacity ease-in;
  max-width: 350px;
`

const WithIconWrapper = css<WithIconWrapperProps>`
  display: flex;
  flex-direction: ${({ iconPosition }) => IconPositionRecord[iconPosition || DEFAULT_ICON_POSITION]};
  align-items: center;
  border: 1px solid ${({ isHovered, hasError }) => getInputState(isHovered, hasError)};
  background: ${WHITE};
  transition: .2s border ease-in;
  border-radius: 8px;
  padding: 0 10px;

  &:focus-within {
    border: 1px solid ${({ hasError }) => InputStatesRecord[hasError ? InputStates.error : InputStates.active]};
  }
`

const SFormInput = css`
  font-family: 'Menlo', serif;
  font-size: 14px;
  font-weight: 400;
  color: ${RAISIN_BLACK};
  outline: none;
  width: auto;
  padding: 0 12px;
  height: 35px;
  border: none;
  border-radius: 8px;
  width: 100%;
`

const HelperText: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 11px;
  font-weight: 400;
  color: ${VENETIAN_RED};
`

export const textInput = {
  TextInputWrapper,
  WithIconWrapper,
  SFormInput,
  HelperText,
}
