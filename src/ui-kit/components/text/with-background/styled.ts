import styled from "styled-components";
import { css } from "styled-components/macro";

import { SWithBackgroundTextProps } from "./types";


export const SWithBackgroundText = styled.p<SWithBackgroundTextProps>` && {
  ${({ theme }) => css`${theme.components.withBackgroundText.SWithBackgroundText}`}
}`
