import styled from "styled-components";
import { css } from "styled-components/macro";

import { SButtonProps } from "./types";


export const SButton = styled.button<SButtonProps>` && {
  ${({ theme }) => css`${theme.components.button.SButton}`}
}`
