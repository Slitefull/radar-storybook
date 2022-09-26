import styled from "styled-components";
import { css } from "styled-components/macro";


export const CaptionWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.singleDatepicker.CaptionWrapper}`}
}`;

export const DateDisplay = styled.span` && {
  ${({ theme }) => css`${theme.components.singleDatepicker.DateDisplay}`}
}`;

export const DayButton = styled.button` && {
  ${({ theme }) => css`${theme.components.singleDatepicker.DayButton}`}
}`;
