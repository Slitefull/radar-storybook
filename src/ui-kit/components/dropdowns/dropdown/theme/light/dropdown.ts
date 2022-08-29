import { SimpleInterpolation } from "styled-components";
import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { DARK_LAVA, EBONY, LIGHT_GREY, PLATINUM, PLUMP_PURPLE, TRANSPARENT, WHITE } from "@/ui-kit/constants/colors";

import {
  DropdownBodyProps,
  DropdownColors,
  DropdownHeaderProps,
  DropdownItemLabelProps,
  DropdownSizes,
  IconWrapperProps
} from "../../types";


const DEFAULT_COLOR = "primary";
const DEFAULT_SIZE = "default";

const getBorderRadius = (rounded: boolean = false, isOpen: boolean) => {
  if (rounded) {
    if (isOpen) {
      return "15px 15px 0 0";
    }
    return "30px";
  }

  if (isOpen) {
    return "4px 4px 0 0";
  }

  return "4px"
}

const primary: ReadonlyArray<SimpleInterpolation> = css`
  background: ${PLUMP_PURPLE};
  font-weight: 700;
  color: ${WHITE};
  border: 1px solid ${TRANSPARENT};

  &:hover {
    background: ${WHITE};
    border: 1px solid ${PLUMP_PURPLE};
    color: ${PLUMP_PURPLE};
  }
`

const secondary: ReadonlyArray<SimpleInterpolation> = css`
  background: ${WHITE};
  font-weight: 700;
  color: ${PLUMP_PURPLE};
  border: 1px solid ${PLUMP_PURPLE};

  &:hover {
    background: ${PLUMP_PURPLE};
    color: ${WHITE};
    border: 1px solid ${TRANSPARENT};
  }
`

const ghost: ReadonlyArray<SimpleInterpolation> = css`
  font-family: 'Menlo', serif;
  color: ${DARK_LAVA};
  background: ${TRANSPARENT};
  border: 1px solid ${PLATINUM};
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;

  &:hover {
    background: ${WHITE};
    border: 1px solid ${PLUMP_PURPLE};
  }
`

const DropdownColorsRecord: Record<DropdownColors, FlattenSimpleInterpolation> = {
  "primary": primary,
  "secondary": secondary,
  "ghost": ghost,
};

const MaxHeightRecord: Record<DropdownSizes, string> = {
  "default": "40px",
  "small": "35px",
};

const IconWrapperTopRecord: Record<DropdownSizes, string> = {
  "default": "10px",
  "small": "8px",
};

const DropdownItemLabelRecord: Record<DropdownColors, string> = {
  "primary": EBONY,
  "secondary": EBONY,
  "ghost": EBONY,
};

const Row = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 10px;
`

const Label = css`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`

const SDropdown = css`
  position: relative;
  z-index: 999;
`

const DropdownHeader = css<DropdownHeaderProps>`
  padding: 8px 55px 8px 15px;
  cursor: pointer;
  position: relative;
  border-radius: ${({ rounded, isOpen }) => getBorderRadius(rounded, isOpen)};
  max-height: ${({ size }) => MaxHeightRecord[size || DEFAULT_SIZE]};
  transition: .2s background ease-in, .2s border ease-in, .2s color ease-in, .2s border-radius ease-in;

  ${({ color }) => css`${DropdownColorsRecord[color || DEFAULT_COLOR]}`};

  &:hover {
    transition: .2s background ease-in, .2s border ease-in, .2s color ease-in, .2s border-radius ease-in;
  }
`

const IconWrapper = css<IconWrapperProps>`
  position: absolute;
  top: ${({ size }) => IconWrapperTopRecord[size || DEFAULT_SIZE]};
  right: 15px;
`

const DropdownBody = css<DropdownBodyProps>`
  padding: 5px;
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
  border-right: ${({ color }) => color === "ghost" ? `1px solid ${LIGHT_GREY}` : `1px solid ${LIGHT_GREY}`};
  border-bottom: ${({ color }) => color === "ghost" ? `1px solid ${LIGHT_GREY}` : `1px solid ${LIGHT_GREY}`};
  border-left: ${({ color }) => color === "ghost" ? `1px solid ${LIGHT_GREY}` : `1px solid ${LIGHT_GREY}`};
  position: absolute;
  width: 100%;
  background: ${WHITE};
  border-radius: 0 0 5px 5px;
`

const DropdownItem = css`
  display: flex;
  align-items: center;
  padding: 7px;
`

const DropdownItemLabel = css<DropdownItemLabelProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ color }) => DropdownItemLabelRecord[color || DEFAULT_COLOR]};
  cursor: pointer;
  transition: .2s opacity ease-in;

  &:hover {
    opacity: .7;
    transition: .2s opacity ease-in;
  }
`

export const dropdown = {
  Row,
  Label,
  SDropdown,
  DropdownHeader,
  DropdownBody,
  DropdownItem,
  IconWrapper,
  DropdownItemLabel,
}
