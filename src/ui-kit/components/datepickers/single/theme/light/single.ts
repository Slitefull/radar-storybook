import { css } from "styled-components/macro"
import { RAISIN_BLACK } from "@/ui-kit/constants/colors";


const CaptionWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 25px;
`;

const DateDisplay = css`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${RAISIN_BLACK};
`;

const DayButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${RAISIN_BLACK};
  background: none;
  cursor: pointer;
  transition: .2s opacity;

  &:hover {
    opacity: .8;
    transition: .2s opacity;
  }
`;

export const singleDatepicker = {
  CaptionWrapper,
  DateDisplay,
  DayButton,
}
