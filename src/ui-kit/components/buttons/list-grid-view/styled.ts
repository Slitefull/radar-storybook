import styled from "styled-components";
import { css } from "styled-components/macro";

import { SButtonProps } from "./types";


export const Row = styled.button` && {
  ${({ theme }) => css`${theme.components.listGridView.Row}`}
}`

export const SButton = styled.button<SButtonProps>` && {
  ${({ theme }) => css`${theme.components.listGridView.SButton}`}
}`
