import styled from "styled-components";
import { css } from "styled-components/macro";

import { STextareaProps, TextareaWrapperProps } from "./types";


export const TextareaWrapper = styled.div<TextareaWrapperProps>` && {
  ${({ theme }) => css`${theme.components.textarea.TextareaWrapper}`}
}`

export const STextarea = styled.textarea<STextareaProps>` && {
  ${({ theme }) => css`${theme.components.textarea.STextarea}`}
}`

export const HelperText = styled.span` && {
  ${({ theme }) => css`${theme.components.textarea.HelperText}`}
}`
