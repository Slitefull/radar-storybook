import styled from "styled-components";
import { css } from "styled-components/macro";

import {
  IconContainerProps,
  LinkTitleProps,
  SidebarLinkProps,
  SidebarLogoCollapsedProps,
  SidebarLogoExpandedProps,
  StyledSidebarProps
} from "./types";


export const StyledSidebar = styled.nav<StyledSidebarProps>` && {
  ${({ theme }) => css`${theme.components.sidebar.StyledSidebar}`}
}`;

export const LogosWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.sidebar.LogosWrapper}`}
}`

export const SidebarLogoExpanded = styled.img<SidebarLogoExpandedProps>` && {
  ${({ theme }) => css`${theme.components.sidebar.SidebarLogoExpanded}`}
}`;

export const SidebarLogoCollapsed = styled.img<SidebarLogoCollapsedProps>` && {
  ${({ theme }) => css`${theme.components.sidebar.SidebarLogoCollapsed}`}
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
