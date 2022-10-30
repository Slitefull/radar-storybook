import styled from "styled-components";

import { ContentProps } from "./types";


export const SCollapsible = styled.div`
  ${({ theme }) => theme.components.cards.collapsible.SCollapsible}
`;

export const CHeader = styled.div`
  ${({ theme }) => theme.components.cards.collapsible.CHeader}
`;

export const CTitle = styled.div`
  ${({ theme }) => theme.components.cards.collapsible.CTitle}
`;

export const CSubtitle = styled.div`
  ${({ theme }) => theme.components.cards.collapsible.CSubtitle}
`;

export const ResizeContainer = styled.div`
  ${({ theme }) => theme.components.cards.collapsible.ResizeContainer}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => theme.components.cards.collapsible.ContentContainer}
`;

export const Content = styled.div<ContentProps>`
  ${({ theme }) => theme.components.cards.collapsible.Content}
`;
