import styled from "styled-components";

import { CGWrapperProps } from "./types";


export const CGWrapper = styled.div<CGWrapperProps>`
  ${({ theme }) => theme.components.controls.checkboxGroup.CGWrapper}
`;
