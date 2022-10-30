import styled from "styled-components";

import { WithLabelWrapperProps } from "./types";


export const WithLabelWrapper = styled.div<WithLabelWrapperProps>`
  ${({ theme }) => theme.components.controls.withTypes.WithLabelWrapper}
`;
