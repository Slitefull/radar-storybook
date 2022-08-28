import styled, { css } from "styled-components";

import { CheckboxLabelProps } from "./types";


export const StyledCheckbox = styled.input` && {
  ${({ theme }) => css`${theme.components.checkboxInput.StyledCheckbox}`}
}`;

export const CheckboxLabel = styled.label<CheckboxLabelProps>` && {
  ${({ theme }) => css`${theme.components.checkboxInput.CheckboxLabel}`}
}`;

export const LabelText = styled.span` && {
  ${({ theme }) => css`${theme.components.checkboxInput.LabelText}`}
}`

export const Indicator = styled.div` && {
  ${({ theme }) => css`${theme.components.checkboxInput.Indicator}`}
}`;
