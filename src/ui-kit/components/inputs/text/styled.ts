import styled from "styled-components";
import { css } from "styled-components/macro";

import { LabelProps, TextInputWrapperProps, WithIconWrapperProps } from "./types";


export const TextInputWrapper = styled.div<TextInputWrapperProps>` && {
  ${({ theme }) => css`${theme.components.textInput.TextInputWrapper}`}
}`

export const SFormInput = styled.input` && {
  ${({ theme }) => css`${theme.components.textInput.SFormInput}`}
}`

export const Label = styled.label<LabelProps>` && {
  ${({ theme }) => css`${theme.components.textInput.Label}`}
}`

export const LabelText = styled.label` && {
  ${({ theme }) => css`${theme.components.textInput.LabelText}`}
}`

export const HelperText = styled.span` && {
  ${({ theme }) => css`${theme.components.textInput.HelperText}`}
}`

export const WithIconWrapper = styled.div<WithIconWrapperProps>` && {
  ${({ theme }) => css`${theme.components.textInput.WithIconWrapper}`}
}`
