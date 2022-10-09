import { css } from "styled-components/macro";
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { PLUMP_PURPLE, WHITE } from "@/ui-kit/constants/colors";

import { LabelProps } from "../../types";


type LabelPositions = "left" | "right";

const DEFAULT_LABEL_POSITION = "left";

const LabelPositionsRecord: Record<LabelPositions, string> = {
  "left": "row",
  "right": "row-reverse",
};

const Label: FlattenInterpolation<ThemedStyledProps<LabelProps, DefaultTheme>> = css<LabelProps>`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  align-items: end;
  display: flex;
  flex-direction: ${({ labelPosition }) => LabelPositionsRecord[labelPosition || DEFAULT_LABEL_POSITION]};
  gap: 0 8px;
  opacity: ${({ disabled }) => disabled ? .3 : 1};
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
  cursor: pointer;
  transition: .2s opacity ease-in;

  &:focus-within {
    color: rebeccapurple;
    transition: .2s opacity ease-in;
  }
`

const SRadio: any = css`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${WHITE};
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em rebeccapurple;
  }

  &:checked::before {
    transform: scale(1);
  }
`

export const radio = {
  Label,
  SRadio,
}
