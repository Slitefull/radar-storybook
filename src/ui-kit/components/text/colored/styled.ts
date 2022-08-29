import styled from "styled-components";
import { css } from "styled-components/macro";

import { SColoredTextProps } from "./types";


export const SColoredText = styled.p<SColoredTextProps>` && {
  ${({ theme }) => css`${theme.components.coloredText.SColoredText}`}
}`
