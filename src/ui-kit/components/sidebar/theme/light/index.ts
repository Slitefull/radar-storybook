import { css } from "styled-components/macro";
import { PLUMP_PURPLE, ROCKET_METALLIC, WHITE } from "@/ui-kit/constants/colors";
import { IconContainer as SIconContainer } from "../../styled";
import { LogoProps } from "../../types";


const SSidebar = css`
  height: 100vh;
  width: 88px;
  background: ${WHITE};
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.14);
  position: fixed;
  overflow: hidden;
  z-index: 99999999;
  transition: 0.2s width ease-in;
  padding: 32px 23px 0 23px;

  &:hover {
    width: 225px;
    transition: 0.2s width ease-in;
  }
`;

const IconContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
`;

const SidebarLink = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 15px;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: ${ROCKET_METALLIC};

  &.active {
    color: ${PLUMP_PURPLE};

    ${SIconContainer} {
      background-color: ${PLUMP_PURPLE};
    }
  }
`;

const LinkText = css`
  font-family: 'FreightSans Pro', serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  white-space: nowrap;
  margin: auto;
`;

const Logo = css<LogoProps>`
  display: block;
  width: ${({ isHovered }) => isHovered ? 179 : 42}px;
  height: 52px;
`;

const SFallback = css`
  display: flex;
  flex-direction: column;
  width: 88px;
  height: 100vh;
  position: fixed;
  z-index: 99999999;
  overflow: hidden;
  align-items: center;
`;

const LinksWrapper = css`
  display: flex;
  margin: 65px 0 0 0;
  padding: 0 5px;
  gap: 30px 0;
  flex-direction: column;
`;

export const sidebar = {
  SSidebar,
  SFallback,
  Logo,
  SidebarLink,
  IconContainer,
  LinkText,
  LinksWrapper,
};
