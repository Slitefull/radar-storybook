import styled from "styled-components";

import { WithLabelWrapperProps } from "./types";

//TODO Label
export const WithLabelWrapper = styled.div<WithLabelWrapperProps>`
  ${({ theme }) => theme.components.controls.dropdown.WithLabelWrapper}
`;

export const Label = styled.span`
  ${({ theme }) => theme.components.controls.dropdown.Label}
`;
