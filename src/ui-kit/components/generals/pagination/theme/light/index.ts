import { css } from "styled-components/macro";
import { PRIMARY_40, NEUTRAL_20, PRIMARY_60, NEUTRAL_100, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { PaginationItemProps } from "../../types";


const SPagination = css`
  display: inline-flex;
  list-style-type: none;
  background: ${NEUTRAL_00};
  border: 1px solid ${NEUTRAL_20};
  border-radius: 10px;
`;

const PaginationItem = css<PaginationItemProps>`
  font-family: "Menlo", serif;
  color: ${({ selected }) => selected ? NEUTRAL_00 : NEUTRAL_100};
  background: ${({ selected }) => selected ? PRIMARY_60 : NEUTRAL_00};
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
    background-color: ${({ disabled, selected }) => (disabled || selected) ? PRIMARY_40 : NEUTRAL_20} ;
    transition: .2s background-color ease-in;
    cursor: pointer;
  }
`;

export const pagination = {
  SPagination,
  PaginationItem,
};
