import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { DARK_GREY, PLUMP_PURPLE, WHITE } from "@/ui-kit/constants/colors";

import { DText as DTextElement } from "../../styled"


const SDay: FlattenSimpleInterpolation = css`
  visibility: hidden;
  position: absolute;

  &:checked + ${DTextElement} {
    color: ${WHITE};
    background-color: ${PLUMP_PURPLE};
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
  background: ${DARK_GREY};
  color: ${WHITE};
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
