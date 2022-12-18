import styled from "styled-components";

import { WithLabelWrapperProps } from "./types";


export const WithLabelWrapper = styled.div<WithLabelWrapperProps>`
  ${({ theme }) => theme.components.controls.dropdown.WithLabelWrapper}
`;

export const OptionContainer = styled.div`
  ${({ theme }) => theme.components.controls.dropdown.OptionContainer}
`;

export const SubElementContainer = styled.div`
  ${({ theme }) => theme.components.controls.dropdown.SubElementContainer}
`;