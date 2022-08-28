import styled from "styled-components";
import { css } from "styled-components/macro";

import {
  DropdownBodyProps,
  DropdownHeaderProps,
  DropdownHeaderTextProps,
  DropdownItemDotProps,
  DropdownItemLabelProps,
  IconWrapperProps,
} from "./types";


export const Row = styled.div` && {
  ${({ theme }) => css`${theme.components.dropdown.Row}`}
}`

export const StyledDropdown = styled.div` && {
  ${({ theme }) => css`${theme.components.dropdown.StyledDropdown}`}
}`

export const Label = styled.div` && {
  ${({ theme }) => css`${theme.components.dropdown.Label}`}
}`

export const DropdownHeader = styled.div<DropdownHeaderProps>` && {
  ${({ theme }) => css`${theme.components.dropdown.DropdownHeader}`}
}`

export const IconWrapper = styled.span<IconWrapperProps>` && {
  ${({ theme }) => css`${theme.components.dropdown.IconWrapper}`}
}`

export const DropdownBody = styled.div<DropdownBodyProps>` && {
  ${({ theme }) => css`${theme.components.dropdown.DropdownBody}`}
}`

export const DropdownItem = styled.div` && {
  ${({ theme }) => css`${theme.components.dropdown.DropdownItem}`}
}`

export const DropdownItemLabel = styled.span<DropdownItemLabelProps>` && {
  ${({ theme }) => css`${theme.components.dropdown.DropdownItemLabel}`}
}`
