import styled from "styled-components";
import { css } from "styled-components/macro";

import { CalendarBulletProps } from "./types";


export const DatepickerWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.DatepickerWrapper}`}
}`;

export const CaptionWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.CaptionWrapper}`}
}`;

export const DateDisplay = styled.span` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.DateDisplay}`}
}`;

export const DayButton = styled.button` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.DayButton}`}
}`;

export const Separator = styled.div` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.Separator}`}
}`;

export const CalendarBullet = styled.button<CalendarBulletProps>` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.CalendarBullet}`}
}`;

export const SelectedDaysText = styled.p` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.SelectedDaysText}`}
}`;

export const SelectedDaysCount = styled.span` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.SelectedDaysCount}`}
}`;

export const Weekday = styled.span` && {
  ${({ theme }) => css`${theme.components.rangeDatepicker.Weekday}`}
}`;
