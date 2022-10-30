import { css } from "styled-components/macro";
import { WHITE } from "@/ui-kit/constants/colors";

import { LabelPositions } from "@/ui-kit/components/label/types";
import { RWrapperProps } from "../../types";


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

const RWrapper = css<RWrapperProps>`
  display: inline-flex;
  gap: 5px;
  flex-direction: ${({ labelPosition }) => LabelPositionRecord[labelPosition]};
  align-items: ${({ labelPosition }) => LabelPositionAlignRecord[labelPosition]};
`

const SRadio = css`
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
`;

export const radio = {
  SRadio,
  RWrapper,
};
