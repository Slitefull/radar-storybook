import styled from "styled-components";
import { css } from "styled-components/macro";

import { StyledLinkProps, WithIconWrapperProps } from "./types";


export const StyledLink = styled.button<StyledLinkProps>` && {
  ${({ theme }) => css`${theme.components.link.StyledLink}`}
}`

export const WithIconWrapper = styled.div<WithIconWrapperProps>` && {
  ${({ theme }) => css`${theme.components.link.WithIconWrapper}`}
}`
