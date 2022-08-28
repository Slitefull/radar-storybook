import styled from "styled-components";
import { css } from "styled-components/macro";


export const LeftSide = styled.div` && {
  ${({ theme }) => css`${theme.components.header.LeftSide}`}
}`;

export const RightSide = styled.div` && {
  ${({ theme }) => css`${theme.components.header.RightSide}`}
}`;

export const HeaderWrapper = styled.header` && {
  ${({ theme }) => css`${theme.components.header.HeaderWrapper}`}
}`;

export const HeaderTitle = styled.span` && {
  ${({ theme }) => css`${theme.components.header.HeaderTitle}`}
}`;
