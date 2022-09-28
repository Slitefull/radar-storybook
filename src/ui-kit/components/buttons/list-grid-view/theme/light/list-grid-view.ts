import { css } from "styled-components/macro";
import { PLUMP_PURPLE, ROCKET_METALLIC, TRANSPARENT } from "@/ui-kit/constants/colors";

import { SButtonProps } from "../../types";


const getBorderColor = (isActive: boolean, isHovered: boolean): Color => {
  if (isActive) {
    if (isHovered) {
      return PLUMP_PURPLE;
    }
    return PLUMP_PURPLE;
  }

  if (isHovered) {
    return PLUMP_PURPLE;
  }

  return ROCKET_METALLIC;
};

const Row = css`
  display: flex;
  flex-direction: row;
  border: none;
`

const SButton = css<SButtonProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 0;
  cursor: pointer;
  background: ${({ isActive }) => isActive ? PLUMP_PURPLE : TRANSPARENT};
  border: 1px solid ${({ isActive, isHovered }) => getBorderColor(isActive, isHovered)};
`

export const listGridView = {
  Row,
  SButton,
}
