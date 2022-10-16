import { css } from "styled-components/macro";
import { DARK_GREY, LIGHT_GREY, PLUMP_PURPLE, SNOW } from "@/ui-kit/constants/colors";

import { SDayBulletProps } from "../../types";


const SDayBullet = css<SDayBulletProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  cursor: pointer;
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${SNOW};
  padding: 5px 4px;
  background-color: ${({ active }) => active ? PLUMP_PURPLE : DARK_GREY};
  border-radius: 50%;
  transition: .2s background-color ease-in;

  &:hover {
    background-color: ${LIGHT_GREY};
    transition: .2s background-color ease-in;
  }
`

export const dayBullet = {
  SDayBullet,
}
