import { css } from "styled-components/macro"
import {
  DARK_LAVA,
  KSU_PURPLE,
  LIGHT_GREY,
  PLATINUM,
  PLUMP_PURPLE,
  RAISIN_BLACK,
  WHITE
} from "@/ui-kit/constants/colors";

import { CalendarBulletProps } from "../../types";


const DatepickerWrapper = css`
  display: flex;
  flex-direction: row;
  background: ${WHITE};
  border: 1px solid ${LIGHT_GREY};
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
  color: ${RAISIN_BLACK};
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
  color: ${RAISIN_BLACK};
  background: none;
  cursor: pointer;
  transition: .2s opacity, .2s border ease-in;

  &:hover {
    opacity: .8;
    transition: .2s opacity, .2s border ease-in;
    border: 1px solid ${KSU_PURPLE};
  }
`;

const Separator = css`
  border-left: 1px solid ${LIGHT_GREY};
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
  background: ${({ isSelected }) => isSelected ? PLUMP_PURPLE : WHITE};
  border: 1px solid ${({ isSelected }) => isSelected ? PLUMP_PURPLE : PLATINUM};
  border-radius: 34px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({ isSelected }) => isSelected ? WHITE : DARK_LAVA};
  cursor: pointer;
  transition: .2s background ease-in, .2s color ease-in, .2s border ease-in;

  &:hover {
    border: 1px solid ${PLUMP_PURPLE};
  }
`;

const SelectedDaysText = css`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${RAISIN_BLACK};
  text-align: center;
`;

const SelectedDaysCount = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
`;

const Weekday = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${RAISIN_BLACK};
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
