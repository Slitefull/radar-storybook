import styled from "styled-components";

import { STextareaProps, TextareaWrapperProps } from "./types";


export const TextareaWrapper = styled.div<TextareaWrapperProps>`
  ${({ theme }) => theme.components.controls.textarea.TextareaWrapper}
`;

export const STextarea = styled.textarea<STextareaProps>`
  ${({ theme }) => theme.components.controls.textarea.STextarea}
`;

export const HelperText = styled.span`
  ${({ theme }) => theme.components.controls.textarea.HelperText}
`;
