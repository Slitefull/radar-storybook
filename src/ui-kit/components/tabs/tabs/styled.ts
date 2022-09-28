import styled from "styled-components";
import { css } from "styled-components/macro";


export const TabHeaderContainer = styled.div`
  ${({ theme }) => css`${theme.components.tabs.TabHeaderContainer}`}
`;

export const TabsHolder = styled.div`
  ${({ theme }) => css`${theme.components.tabs.TabsHolder}`}
`;
