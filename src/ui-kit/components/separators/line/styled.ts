import styled from "styled-components";

import { SLineSeparatorProps } from "./types";


export const SLineSeparator = styled.hr<SLineSeparatorProps>`
  ${({ theme }) => theme.components.separators.line.SLineSeparator}
`;
