import styled from "styled-components";
import { css } from "styled-components/macro";

import { SLabelProps, SNumberProps, SIndicatorProps } from "./types";


export const SStepper = styled.div` && {
  ${({ theme }) => css`${theme.components.stepper.SStepper}`}
}`;

export const SIndicator = styled.div<SIndicatorProps>` && {
  ${({ theme }) => css`${theme.components.stepper.SIndicator}`}
}`;

export const SInner = styled.div` && {
  ${({ theme }) => css`${theme.components.stepper.SInner}`}
}`;

export const SNumber = styled.div<SNumberProps>` && {
  ${({ theme }) => css`${theme.components.stepper.SNumber}`}
}`;

export const SLabel = styled.p<SLabelProps>` && {
  ${({ theme }) => css`${theme.components.stepper.SLabel}`}
}`;

export const SSteps = styled.div` && {
  ${({ theme }) => css`${theme.components.stepper.SSteps}`}
}`;

export const SActions = styled.div` && {
  ${({ theme }) => css`${theme.components.stepper.SActions}`}
}`;

export const SLine = styled.div` && {
  ${({ theme }) => css`${theme.components.stepper.SLine}`}
}`;
