import styled from "styled-components";

import { RGWrapperProps } from "./types";


export const RGWrapper = styled.div<RGWrapperProps>`
  ${({ theme }) => theme.components.controls.radioGroup.RGWrapper}
`;
