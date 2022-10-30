import styled from "styled-components";

import { SLinkProps, WithIconWrapperProps } from "./types";


export const SLink = styled.button<SLinkProps>`
  ${({ theme }) => theme.components.buttons.link.SLink}
`;

export const WithIconWrapper = styled.div<WithIconWrapperProps>`
  ${({ theme }) => theme.components.buttons.link.WithIconWrapper}
`;
