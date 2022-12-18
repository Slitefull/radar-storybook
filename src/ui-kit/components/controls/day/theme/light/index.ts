import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { NEUTRAL_50, PRIMARY_60, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { DText as DTextElement } from "../../styled"


const SDay: FlattenSimpleInterpolation = css`
  visibility: hidden;
  position: absolute;

  &:checked + ${DTextElement} {
    color: ${NEUTRAL_00};
    background-color: ${PRIMARY_60};
    box-shadow: inset 0 1px 0 rgba(133, 163, 244, 0.25);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const DText = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.02em;
  background: ${NEUTRAL_50};
  color: ${NEUTRAL_00};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s color, .2s background-color;
`;


export const day = {
  SDay,
  DText,
};
