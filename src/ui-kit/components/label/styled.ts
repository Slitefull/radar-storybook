import styled from "styled-components";

import { SLabelProps } from "./types";


export const SLabel = styled.label<SLabelProps>`
  ${({ theme }) => theme.components.text.label.SLabel}
`;
