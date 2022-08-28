import styled from "styled-components";
import { css } from "styled-components/macro";

import { StyledButtonProps } from "./types";


export const StyledButton = styled.button<StyledButtonProps>` && {
  ${({ theme }) => css`${theme.components.button.StyledButton}`}
}`
