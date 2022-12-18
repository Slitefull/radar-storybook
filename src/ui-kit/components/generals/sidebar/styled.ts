import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { LogoProps } from "./types";


export const SSidebar = styled.nav`
  ${({ theme }) => theme.components.generals.sidebar.SSidebar}
`;

export const SFallback = styled.div`
  ${({ theme }) => theme.components.generals.sidebar.SFallback}
`;

export const Logo = styled.img<LogoProps>`
  ${({ theme }) => theme.components.generals.sidebar.Logo}
`;

export const SLink = styled(NavLink)`
  ${({ theme }) => theme.components.generals.sidebar.SidebarLink}
`;

export const IconContainer = styled.div`
  ${({ theme }) => theme.components.generals.sidebar.IconContainer}
`;

export const LinkText = styled.span`
  ${({ theme }) => theme.components.generals.sidebar.LinkText}
`;

export const LinksWrapper = styled.div`
  ${({ theme }) => theme.components.generals.sidebar.LinksWrapper}
`;
