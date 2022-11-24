import styled from "styled-components";

import { SBorderedLayoutProps } from "./types";


export const SBorderedLayout = styled.div<SBorderedLayoutProps>`
  ${({ theme }) => theme.components.layouts.bordered.SBorderedLayout}
`;

export const BackIconWrapper = styled.div`
  ${({ theme }) => theme.components.layouts.bordered.BackIconWrapper}
`;
