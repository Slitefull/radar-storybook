import styled from "styled-components";

import { SWithBackgroundTextProps } from "./types";


export const SWithBackgroundText = styled.p<SWithBackgroundTextProps>`
  ${({ theme }) => theme.components.text.withBackground.SWithBackgroundText}
`;
