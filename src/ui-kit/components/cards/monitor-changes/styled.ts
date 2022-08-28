import styled from "styled-components";
import { css } from "styled-components/macro";
import { PercentageProps } from "./types";


export const CardWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.CardWrapper}`}
}`

export const LeftSide = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.LeftSide}`}
}`

export const RightSide = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.RightSide}`}
}`

export const CardLink = styled.a` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.CardLink}`}
}`

export const TotalText = styled.p` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.TotalText}`}
}`

export const TotalNumbers = styled.span` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.TotalNumbers}`}
}`

export const Percentage = styled.span<PercentageProps>` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.Percentage}`}
}`

export const ChartInfoWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.ChartInfoWrapper}`}
}`

export const ChartInfo = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.ChartInfo}`}
}`

export const ChartInfoText = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.ChartInfoText}`}
}`

export const HorizontalLine = styled.hr` && {
  ${({ theme }) => css`${theme.components.monitorChangesCard.HorizontalLine}`}
}`
