import { css } from "styled-components/macro";
import { PLUMP_PURPLE, ROCKET_METALLIC, TRANSPARENT, WHITE } from "@/ui-kit/constants/colors";

import {
  IconContainerProps,
  LinkTitleProps,
  SidebarLinkProps,
  SidebarLogoCollapsedProps,
  SidebarLogoExpandedProps,
  StyledSidebarProps
} from "../../types";


const StyledSidebar = css<StyledSidebarProps>`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  width: 90px;
  height: 100vh;
  background: ${WHITE};
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.14);
  transition: .25s width ease-out;
  align-items: ${({ isHovered }) => isHovered ? "flex-start" : "center"};
  position: fixed;
  z-index: 99999999;

  &:hover {
    width: 225px;
  }
`

const LogosWrapper = css`
  margin-bottom: 50px;
`

const SidebarLogoExpanded = css<SidebarLogoExpandedProps>`
  height: ${({ isHovered }) => isHovered ? "50px" : 0};
  opacity: ${({ isHovered }) => isHovered ? 1 : 0};
  max-width: 180px;
  transition: .3s opacity ease-in;
`

const SidebarLogoCollapsed = css<SidebarLogoCollapsedProps>`
  height: ${({ isHovered }) => isHovered ? 0 : "50px"};
  opacity: ${({ isHovered }) => isHovered ? 0 : 1};
  max-width: 180px;
  transition: .3s opacity ease-in;
`

const LinksWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px 0;
`

const SidebarLink = css<SidebarLinkProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: ${({ isHovered }) => isHovered ? "0 15px" : "0"};

  > span {
    color: ${({ isChecked }) => isChecked ? PLUMP_PURPLE : ROCKET_METALLIC};
  }
`

const IconContainer = css<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  transition: .2s background ease-in;
  background: ${({ isChecked }) => isChecked ? PLUMP_PURPLE : TRANSPARENT};
`

const LinkTitle = css<LinkTitleProps>`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${ROCKET_METALLIC};
  transition: .3s color ease-out, .1s opacity ease-out;
  opacity: ${({ isHovered }) => isHovered ? 1 : 0};
  width: ${({ isHovered }) => isHovered ? "100%" : 0};
`

export const sidebar = {
  StyledSidebar,
  LogosWrapper,
  SidebarLogoExpanded,
  SidebarLogoCollapsed,
  LinksWrapper,
  SidebarLink,
  IconContainer,
  LinkTitle,
}
