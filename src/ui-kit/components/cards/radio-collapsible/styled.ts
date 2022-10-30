import styled from "styled-components";

import { ContentProps } from "./types";


export const SCollapsible = styled.div`
  ${({ theme }) => theme.components.cards.radioCollapsible.SCollapsible}
`;

export const CHeader = styled.div`
  ${({ theme }) => theme.components.cards.radioCollapsible.CHeader}
`;

export const ResizeContainer = styled.div`
  ${({ theme }) => theme.components.cards.radioCollapsible.ResizeContainer}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => theme.components.cards.radioCollapsible.ContentContainer}
`;

export const Content = styled.div<ContentProps>`
  ${({ theme }) => theme.components.cards.radioCollapsible.Content}
`;
