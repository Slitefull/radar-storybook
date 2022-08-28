import styled from "styled-components";
import { css } from "styled-components/macro";


export const BellIconWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.bellIcon.BellIconWrapper}`}
}`;

export const Count = styled.span` && {
  ${({ theme }) => css`${theme.components.bellIcon.Count}`}
}`;
