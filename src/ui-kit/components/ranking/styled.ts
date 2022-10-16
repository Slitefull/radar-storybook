import styled from "styled-components";
import { css } from "styled-components/macro";

import { RankProps, RankWrapperProps, SRankingProps } from "./types";


export const SRanking = styled.fieldset<SRankingProps>` && {
  ${({ theme }) => css`${theme.components.ranking.SRanking}`}
}`

export const RNumber = styled.span` && {
  ${({ theme }) => css`${theme.components.ranking.RNumber}`}
}`

export const RNeutral = styled.span` && {
  ${({ theme }) => css`${theme.components.ranking.RNeutral}`}
}`

export const RIcon = styled.legend` && {
  ${({ theme }) => css`${theme.components.ranking.RIcon}`}
}`

export const RankWrapper = styled.div<RankWrapperProps>` && {
  ${({ theme }) => css`${theme.components.ranking.RankWrapper}`}
}`

export const Rank = styled.span<RankProps>` && {
  ${({ theme }) => css`${theme.components.ranking.Rank}`}
}`
