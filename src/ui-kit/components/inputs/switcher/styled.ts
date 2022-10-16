import styled from "styled-components";
import { css } from "styled-components/macro";

import { SwitchButtonProps, SwitchLabelProps } from "./types";


export const SwitchInput = styled.input`
  ${({ theme }) => css`${theme.components.switcherInput.SwitchInput}`}
`;

export const SwitchLabel = styled.label<SwitchLabelProps>`
  ${({ theme }) => css`${theme.components.switcherInput.SwitchLabel}`}
`;

export const SwitchButton = styled.span<SwitchButtonProps>`
  ${({ theme }) => css`${theme.components.switcherInput.SwitchButton}`}
`;
