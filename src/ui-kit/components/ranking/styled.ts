import styled from "styled-components";

import { RankProps, RankWrapperProps, SRankingProps } from "./types";


export const SRanking = styled.fieldset<SRankingProps>`
  ${({ theme }) => theme.components.bullets.ranking.SRanking}
`;

export const RNumber = styled.span`
  ${({ theme }) => theme.components.bullets.ranking.RNumber}
`;

export const RNeutral = styled.span`
  ${({ theme }) => theme.components.bullets.ranking.RNeutral}
`;

export const RIcon = styled.legend`
  ${({ theme }) => theme.components.bullets.ranking.RIcon}
`;

export const RankWrapper = styled.div<RankWrapperProps>`
  ${({ theme }) => theme.components.bullets.ranking.RankWrapper}
`;

export const Rank = styled.span<RankProps>`
  ${({ theme }) => theme.components.bullets.ranking.Rank}
`;
