import styled from "styled-components";

import { SButtonProps } from "./types";


export const SButton = styled.button<SButtonProps>`
  ${({ theme }) => theme.components.buttons.button.SButton}
`;
