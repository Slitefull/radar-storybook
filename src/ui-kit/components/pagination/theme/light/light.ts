import { css } from "styled-components/macro";
import { MEDIUM_PURPLE, PLATINUM, PLUMP_PURPLE, RAISIN_BLACK, WHITE } from "@/ui-kit/constants/colors";

import { PaginationItemProps } from "../../types";


const SPagination = css`
  display: inline-flex;
  list-style-type: none;
  background: ${WHITE};
  border: 1px solid ${PLATINUM};
  border-radius: 10px;
`

const PaginationItem = css<PaginationItemProps>`
  font-family: 'Menlo', serif;
  color: ${({ selected }) => selected ? WHITE : RAISIN_BLACK};
  background: ${({ selected }) => selected ? PLUMP_PURPLE : WHITE};
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"} ;
  border-radius: ${({ disabled }) => disabled ? "10px" : 0} ;
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"} ;
  transition: .2s background-color ease-in;
  
  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }

  &:hover {
    background-color: ${({ disabled, selected }) => (disabled || selected) ? MEDIUM_PURPLE : PLATINUM} ;
    transition: .2s background-color ease-in;
    cursor: pointer;
  }
`

export const pagination = {
  SPagination,
  PaginationItem,
}
