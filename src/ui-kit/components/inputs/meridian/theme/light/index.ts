import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { PLATINUM, PLUMP_PURPLE, WHITE } from "@/ui-kit/constants/colors";

import { MText as MTextElement } from "../../styled";


const SMeridian: FlattenSimpleInterpolation = css`
  visibility: hidden;
  position: absolute;

  &:checked + ${MTextElement} {
    color: ${WHITE};
    background-color: ${PLUMP_PURPLE};
    box-shadow: inset 0 1px 0 rgba(133, 163, 244, 0.25);
  }
`;

const MText = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.02em;
  background: ${WHITE};
  border: 1px solid ${PLATINUM};
  color: ${PLUMP_PURPLE};
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s color, .2s background-color;
  cursor: pointer;
`;

export const meridian = {
  SMeridian,
  MText,
};
