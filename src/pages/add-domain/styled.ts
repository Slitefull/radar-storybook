import styled from "styled-components";
import { css } from "styled-components/macro";


export const PageTitle = styled.h1` && {
  ${({ theme }) => css`${theme.components.addDomainPage.PageTitle}`}
}`;

export const SliderElement = styled.p` && {
  ${({ theme }) => css`${theme.components.addDomainPage.SliderElement}`}
}`;

export const TooltipText = styled.p` && {
  ${({ theme }) => css`${theme.components.addDomainPage.TooltipText}`}
}`;
