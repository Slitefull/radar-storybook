import styled from "styled-components";


export const CardWrapper = styled.div`
  ${({ theme }) => theme.components.cards.monitorChanges.CardWrapper}
`;

export const LeftSide = styled.div`
  ${({ theme }) => theme.components.cards.monitorChanges.LeftSide}
`;

export const RightSide = styled.div`
  ${({ theme }) => theme.components.cards.monitorChanges.RightSide}
`;

export const CardName = styled.span`
  ${({ theme }) => theme.components.cards.monitorChanges.CardName}
`;

export const TotalText = styled.p`
  ${({ theme }) => theme.components.cards.monitorChanges.TotalText}
`;

export const TotalNumbers = styled.span`
  ${({ theme }) => theme.components.cards.monitorChanges.TotalNumbers}
`;

export const ChartInfoWrapper = styled.div`
  ${({ theme }) => theme.components.cards.monitorChanges.ChartInfoWrapper}
`;

export const ChartInfo = styled.div`
  ${({ theme }) => theme.components.cards.monitorChanges.ChartInfo}
`;

export const ChartInfoText = styled.div`
  ${({ theme }) => theme.components.cards.monitorChanges.ChartInfoText}
`;

export const HorizontalLine = styled.hr`
  ${({ theme }) => theme.components.cards.monitorChanges.HorizontalLine}
`;
