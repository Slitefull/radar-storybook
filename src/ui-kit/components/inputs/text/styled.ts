import styled from "styled-components";
import { css } from "styled-components/macro";

import { TextInputWrapperProps, WithIconWrapperProps } from "./types";


export const TextInputWrapper = styled.div<TextInputWrapperProps>` && {
  ${({ theme }) => css`${theme.components.textInput.TextInputWrapper}`}
}`

export const SFormInput = styled.input` && {
  ${({ theme }) => css`${theme.components.textInput.SFormInput}`}
}`

export const HelperText = styled.span` && {
  ${({ theme }) => css`${theme.components.textInput.HelperText}`}
}`

export const WithIconWrapper = styled.div<WithIconWrapperProps>` && {
  ${({ theme }) => css`${theme.components.textInput.WithIconWrapper}`}
}`
