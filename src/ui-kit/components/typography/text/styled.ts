import styled from "styled-components";

import { STextProps } from "./types";


export const SText = styled.p<STextProps>`
  ${({ theme }) => theme.components.typography.text.SText}
`;
