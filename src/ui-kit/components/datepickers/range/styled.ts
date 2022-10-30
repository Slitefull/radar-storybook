import styled from "styled-components";

import { CalendarBulletProps } from "./types";


export const DatepickerWrapper = styled.div`
  ${({ theme }) => theme.components.datePickers.range.DatepickerWrapper}
`;

export const CaptionWrapper = styled.div`
  ${({ theme }) => theme.components.datePickers.range.CaptionWrapper}
`;

export const DateDisplay = styled.span`
  ${({ theme }) => theme.components.datePickers.range.DateDisplay}
`;

export const DayButton = styled.button`
  ${({ theme }) => theme.components.datePickers.range.DayButton}
`;

export const Separator = styled.div`
  ${({ theme }) => theme.components.datePickers.range.Separator}
`;

export const CalendarBullet = styled.button<CalendarBulletProps>`
  ${({ theme }) => theme.components.datePickers.range.CalendarBullet}
`;

export const SelectedDaysText = styled.p`
  ${({ theme }) => theme.components.datePickers.range.SelectedDaysText}
`;

export const SelectedDaysCount = styled.span`
  ${({ theme }) => theme.components.datePickers.range.SelectedDaysCount}
`;

export const Weekday = styled.span`
  ${({ theme }) => theme.components.datePickers.range.Weekday}
`;
