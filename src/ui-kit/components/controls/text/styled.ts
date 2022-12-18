import styled from "styled-components";

import { SFormInputProps, TextInputWrapperProps, WithIconWrapperProps } from "./types";


export const TextInputWrapper = styled.div<TextInputWrapperProps>`
  ${({ theme }) => theme.components.controls.text.TextInputWrapper}
`;

export const SFormInput = styled.input<SFormInputProps>`
  ${({ theme }) => theme.components.controls.text.SFormInput}
`;

export const HelperText = styled.span`
  ${({ theme }) => theme.components.controls.text.HelperText}
`;

export const WithIconWrapper = styled.div<WithIconWrapperProps>`
  ${({ theme }) => theme.components.controls.text.WithIconWrapper}
`;
