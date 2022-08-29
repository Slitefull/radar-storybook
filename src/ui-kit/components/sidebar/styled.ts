import styled from "styled-components";
import { css } from "styled-components/macro";

import { IconContainerProps, LinkTitleProps, SidebarLinkProps } from "./types";


export const SSidebar = styled.nav` && {
  ${({ theme }) => css`${theme.components.sidebar.SSidebar}`}
}`;

export const LogosWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.sidebar.LogosWrapper}`}
}`

export const SidebarLogoExpanded = styled.img` && {
  ${({ theme }) => css`${theme.components.sidebar.SidebarLogoExpanded}`}
}`;

export const LinksWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.sidebar.LinksWrapper}`}
}`;

export const SidebarLink = styled.p<SidebarLinkProps>` && {
  ${({ theme }) => css`${theme.components.sidebar.SidebarLink}`}
}`;

export const IconContainer = styled.div<IconContainerProps>` && {
  ${({ theme }) => css`${theme.components.sidebar.IconContainer}`}
}`;

export const LinkTitle = styled.span<LinkTitleProps>` && {
  ${({ theme }) => css`${theme.components.sidebar.LinkTitle}`}
}`;
