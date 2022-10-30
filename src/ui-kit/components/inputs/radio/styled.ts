import styled from "styled-components";

import { RWrapperProps } from "./types";


export const SRadio = styled.input`
  ${({ theme }) => theme.components.controls.radio.SRadio}
`;

export const RWrapper = styled.div<RWrapperProps>`
  ${({ theme }) => theme.components.controls.radio.RWrapper}
`;
