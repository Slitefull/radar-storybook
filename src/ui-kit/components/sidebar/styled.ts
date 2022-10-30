import styled from "styled-components";

import { IconContainerProps, LinkTitleProps, SidebarLinkProps } from "./types";


export const SSidebar = styled.nav`
  ${({ theme }) => theme.components.generals.sidebar.SSidebar}
`;

export const SFallback = styled.div`
  ${({ theme }) => theme.components.generals.sidebar.SFallback}
`;

export const LogosWrapper = styled.div`
  ${({ theme }) => theme.components.generals.sidebar.LogosWrapper}
`

export const LinksWrapper = styled.div`
  ${({ theme }) => theme.components.generals.sidebar.LinksWrapper}
`;

export const SidebarLink = styled.p<SidebarLinkProps>`
  ${({ theme }) => theme.components.generals.sidebar.SidebarLink}
`;

export const IconContainer = styled.div<IconContainerProps>`
  ${({ theme }) => theme.components.generals.sidebar.IconContainer}
`;

export const LinkTitle = styled.span<LinkTitleProps>`
  ${({ theme }) => theme.components.generals.sidebar.LinkTitle}
`;
