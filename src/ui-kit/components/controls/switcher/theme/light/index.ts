import { DefaultTheme, FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
import { css } from "styled-components/macro";
import { NEUTRAL_90, NEUTRAL_20 } from "@/ui-kit/constants/colors";

import { SwitchButtonProps, SwitchLabelProps } from "../../types";
import { SwitchInput as SwitchInputElement, SwitchLabel as SwitchLabelElement } from "../../styled";


const SwitchInput: ReadonlyArray<SimpleInterpolation> = css`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel: FlattenInterpolation<ThemedStyledProps<SwitchLabelProps, DefaultTheme>> = css<SwitchLabelProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 100px;
  background: ${({ backgroundColor }) => backgroundColor || NEUTRAL_20};
  border: 2px solid ${({ borderColor }) => borderColor || NEUTRAL_90};
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton: FlattenInterpolation<ThemedStyledProps<SwitchButtonProps, DefaultTheme>> = css<SwitchButtonProps>`
  content: "";
  position: absolute;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${({ pointColor }) => pointColor || NEUTRAL_90};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${SwitchInputElement}:checked + ${SwitchLabelElement} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabelElement}:active & {
    width: 14px;
  }
`;

export const switcher = {
  SwitchInput,
  SwitchLabel,
  SwitchButton,
};
