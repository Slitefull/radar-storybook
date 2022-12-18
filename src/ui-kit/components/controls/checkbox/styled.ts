import styled from "styled-components";

import { CWrapperProps } from "./types";


export const CWrapper = styled.div<CWrapperProps>`
  ${({ theme }) => theme.components.controls.checkbox.CWrapper}
`;

export const SCheckbox = styled.input`
  ${({ theme }) => theme.components.controls.checkbox.SCheckbox}
`;
