import styled from "styled-components";

import { SwitchButtonProps, SwitchLabelProps } from "./types";


export const SwitchInput = styled.input`
  ${({ theme }) => theme.components.controls.switcher.SwitchInput}
`;

export const SwitchLabel = styled.label<SwitchLabelProps>`
  ${({ theme }) => theme.components.controls.switcher.SwitchLabel}
`;

export const SwitchButton = styled.span<SwitchButtonProps>`
  ${({ theme }) => theme.components.controls.switcher.SwitchButton}
`;
