import { css } from "styled-components/macro";
import { PLUMP_PURPLE, ROCKET_METALLIC, TRANSPARENT, WHITE } from "@/ui-kit/constants/colors";

import { IconContainerProps, LinkTitleProps, SidebarLinkProps } from "../../types";


const SSidebar = css`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100vh;
  background: ${WHITE};
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.14);
  transition: .2s width ease-out;
  position: fixed;
  z-index: 99999999;
  overflow: hidden;

  &:hover {
    width: 240px;
  }
`

const LogosWrapper = css`
  margin: 35px 20px 50px;
`

const SidebarLogoExpanded = css`
  width: 190px;
  transition: .3s opacity ease-in;
`

const LinksWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px 0;
  margin: 0 23px 50px;
`

const SidebarLink = css<SidebarLinkProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0 25px;

  > span {
    color: ${({ isChecked }) => isChecked ? PLUMP_PURPLE : ROCKET_METALLIC};
    white-space: nowrap;
  }
`

const IconContainer = css<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const sidebar = {
  SSidebar,
  LogosWrapper,
  SidebarLogoExpanded,
  LinksWrapper,
  SidebarLink,
  IconContainer,
  LinkTitle,
}
