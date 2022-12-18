import { css } from "styled-components/macro";
import { SimpleInterpolation } from "styled-components";
import { NEUTRAL_20, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { IconWrapper as SIconWrapper, TBox as STooltipBox } from "../../styled";


const IconWrapper = css`
  cursor: pointer;
  transition: .2s opacity;
  height: 24px;
  width: 24px;

  &:hover {
    transition: .2s opacity;
    opacity: .7;
  }
`;

const TBox = css`
  position: absolute;
  top: calc(100% + 10px);
  display: none;
  width: 240px;
  padding: 10px;
  transition: background-color .2s;
  z-index: 999;
`;

const TCard: ReadonlyArray<SimpleInterpolation> = css`
  position: relative;

  & ${SIconWrapper}:hover + ${STooltipBox} {
    background-color: ${NEUTRAL_00};
    border: 1px solid ${NEUTRAL_20};
    display: block;
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.14);
    border-radius: 8px;
  }
`;

export const tooltip = {
  IconWrapper,
  TBox,
  TCard,
};
