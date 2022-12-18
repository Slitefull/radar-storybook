import styled from "styled-components";

import { SIndicatorProps, SLabelProps, SNumberProps, SStepperProps } from "./types";

//TODO Label
export const SStepper = styled.div<SStepperProps>`
  ${({ theme }) => theme.components.generals.stepper.SStepper}
`;

export const SIndicator = styled.div<SIndicatorProps>`
  ${({ theme }) => theme.components.generals.stepper.SIndicator}
`;

export const SInner = styled.div`
  ${({ theme }) => theme.components.generals.stepper.SInner}
`;

export const SNumber = styled.div<SNumberProps>`
  ${({ theme }) => theme.components.generals.stepper.SNumber}
`;

export const SLabel = styled.p<SLabelProps>`
  ${({ theme }) => theme.components.generals.stepper.SLabel}
`;

export const SSteps = styled.div`
  ${({ theme }) => theme.components.generals.stepper.SSteps}
`;

export const SActions = styled.div`
  ${({ theme }) => theme.components.generals.stepper.SActions}
`;

export const SLine = styled.div`
  ${({ theme }) => theme.components.generals.stepper.SLine}
`;
