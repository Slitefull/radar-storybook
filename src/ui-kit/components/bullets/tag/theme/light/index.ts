import { css } from "styled-components/macro";
import { NEUTRAL_90, NEUTRAL_30, PRIMARY_60, TRANSPARENT, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { STagProps, STTitleProps } from "../../types";


const STag = css<STagProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 10px 2px 5px;
  gap: 7px;
  width: fit-content;
  height: 22px;
  background: ${({ checked }) => checked ? PRIMARY_60 : NEUTRAL_00};
  border: 1px solid ${({ checked }) => checked ? TRANSPARENT : NEUTRAL_30};
  border-radius: 14px;
  cursor: pointer;
  transition: .2s opacity ease-in;
  text-align: center;
  
  &:hover {
    opacity: .7;
    transition: .2s opacity ease-in;
  }
`;

const Circle = css`
  width: 12px;
  height: 12px;
  border: 1px solid ${NEUTRAL_30};
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondCircle = css`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${NEUTRAL_00};
`;

const TTitle = css<STTitleProps>`
  font-family: 'Menlo',serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({ checked }) => checked ? NEUTRAL_00 : NEUTRAL_90};
`;

export const tag = {
  STag,
  Circle,
  SecondCircle,
  TTitle,
};
