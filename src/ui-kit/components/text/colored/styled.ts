import styled from "styled-components";

import { SColoredTextProps } from "./types";


export const SColoredText = styled.p<SColoredTextProps>`
  ${({ theme }) => theme.components.text.colored.SColoredText}
`;
