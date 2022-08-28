import styled from "styled-components";
import { css } from "styled-components/macro";


export const TextInputWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.textInput.TextInputWrapper}`}
}`

export const WithIconWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.textInput.WithIconWrapper}`}
}`

export const StyledFormInput = styled.input` && {
  ${({ theme }) => css`${theme.components.textInput.StyledFormInput}`}
}`

export const HelperText = styled.span` && {
  ${({ theme }) => css`${theme.components.textInput.HelperText}`}
}`
