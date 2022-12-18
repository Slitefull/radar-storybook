import { css } from "styled-components/macro"
import {
  NEUTRAL_90,
  PRIMARY_70,
  NEUTRAL_30,
  NEUTRAL_20,
  PRIMARY_60,
  NEUTRAL_100,
  NEUTRAL_00
} from "@/ui-kit/constants/colors";

import { CalendarBulletProps } from "../../types";


const DatepickerWrapper = css`
  display: flex;
  flex-direction: row;
  background: ${NEUTRAL_00};
  border: 1px solid ${NEUTRAL_30};
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  width: fit-content;
  padding: 20px 30px;
  gap: 0 30px;
`;

const CaptionWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 25px;
`;

const DateDisplay = css`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
`;

const DayButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
  background: none;
  cursor: pointer;
  transition: .2s opacity, .2s border ease-in;

  &:hover {
    opacity: .8;
    transition: .2s opacity, .2s border ease-in;
    border: 1px solid ${PRIMARY_70};
  }
`;

const Separator = css`
  border-left: 1px solid ${NEUTRAL_30};
  border-radius: 50%;
`;

const CalendarBullet = css<CalendarBulletProps>`
  font-family: "Menlo", serif;
  width: 165px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 15px;
  background: ${({ isSelected }) => isSelected ? PRIMARY_60 : NEUTRAL_00};
  border: 1px solid ${({ isSelected }) => isSelected ? PRIMARY_60 : NEUTRAL_20};
  border-radius: 34px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({ isSelected }) => isSelected ? NEUTRAL_00 : NEUTRAL_90};
  cursor: pointer;
  transition: .2s background ease-in, .2s color ease-in, .2s border ease-in;

  &:hover {
    border: 1px solid ${PRIMARY_60};
  }
`;

const SelectedDaysText = css`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
  text-align: center;
`;

const SelectedDaysCount = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${PRIMARY_60};
`;

const Weekday = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
  text-transform: capitalize;
`;

export const range = {
  DatepickerWrapper,
  CaptionWrapper,
  DateDisplay,
  DayButton,
  Separator,
  CalendarBullet,
  SelectedDaysText,
  SelectedDaysCount,
  Weekday,
};
