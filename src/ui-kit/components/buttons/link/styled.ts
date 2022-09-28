import styled from "styled-components";
import { css } from "styled-components/macro";

import { SLinkProps, WithIconWrapperProps } from "./types";


export const SLink = styled.button<SLinkProps>` && {
  ${({ theme }) => css`${theme.components.link.SLink}`}
}`

export const WithIconWrapper = styled.div<WithIconWrapperProps>` && {
  ${({ theme }) => css`${theme.components.link.WithIconWrapper}`}
}`
