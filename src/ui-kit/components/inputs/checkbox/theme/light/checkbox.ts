import { keyframes, SimpleInterpolation } from "styled-components";
import { css } from "styled-components/macro";
import { PLATINUM, RAISIN_BLACK, SNOW } from "@/ui-kit/constants/colors";

import { CheckboxLabelProps } from "../../types";
import { CheckboxLabel as CheckboxLabelElement, SCheckbox as SCheckboxElement } from "../../styled";


const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const SCheckbox: ReadonlyArray<SimpleInterpolation> = css` && {
  height: 20px;
  width: 20px;
  opacity: 0;
  z-index: -1;
}`

const CheckboxLabel = css<CheckboxLabelProps>` && {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  cursor: ${({ isDisabled }) => isDisabled ? "not-allowed" : "pointer"};
}`

const LabelText = css` && {
  margin-left: 25px;
}`

const Indicator: ReadonlyArray<SimpleInterpolation> = css` && {
  width: 20px;
  height: 20px;
  background: ${SNOW};
  position: absolute;
  border: 1px solid ${RAISIN_BLACK};
  border-radius: 4px;
  transition: 0.2s background;

  ${SCheckboxElement}:not(:disabled):checked & {
    background: ${PLATINUM};
    transition: 0.2s background;
  }

  ${CheckboxLabelElement}:hover & {
    background: ${PLATINUM};
    transition: 0.2s background;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${SCheckboxElement}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 1px 1px 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
}`

export const checkboxInput = {
  SCheckbox,
  CheckboxLabel,
  LabelText,
  Indicator,
}
