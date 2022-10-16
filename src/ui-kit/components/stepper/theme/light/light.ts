import { css } from "styled-components/macro";
import { DARK_GREY, PLUMP_PURPLE, SNOW, WHITE } from "@/ui-kit/constants/colors";
import { SimpleInterpolation } from "styled-components";

import { SLabelProps, SNumberProps, SIndicatorProps } from "../../types";
import { SNumber as StepperNumber } from '../../styled';


const SStepper = css`
  height: fit-content;
`

const SIndicator = css<SIndicatorProps>`
  width: 100%;
  display: flex;
  gap: 0 60px;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  pointer-events: ${({ isClickable }) => isClickable ? "auto" : "none" };
`

const SInner: ReadonlyArray<SimpleInterpolation> = css`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  cursor: pointer;

  &:last-child {
    ${StepperNumber}::after {
      display: none;
    }
  }
`

const SNumber = css<SNumberProps>`
  font-family: 'Menlo', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  background-color: ${({ isPassed }) => isPassed ? PLUMP_PURPLE : DARK_GREY};
  color: ${({ isPassed }) => isPassed ? WHITE : SNOW};
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;

  &:after {
    width: 125px;
    height: 1px;
    border-top: 1px dashed #653CAD;
    position: absolute;
    top: 50%;
    left: 100%;
    content: "";
  }
`

const SLabel = css<SLabelProps>`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${({ isPassed }) => isPassed ? PLUMP_PURPLE : DARK_GREY};
  width: 100%;
`

const SSteps = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2em;
`

const SActions = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 0 20px;
`

const SLine = css`
  top: 100px;
  width: 75%;
  background-color: #d5d5d5;
  height: 2px;
  position: absolute;
  left: 12%;
`

export const stepper = {
  SStepper,
  SIndicator,
  SInner,
  SNumber,
  SLabel,
  SSteps,
  SActions,
  SLine,
}
