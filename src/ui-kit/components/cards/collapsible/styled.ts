import styled from "styled-components";
import { css } from "styled-components/macro";


export const SCollapsible = styled.div` && {
  ${({ theme }) => css`${theme.components.collapsibleCard.SCollapsible}`}
}`

export const CHeader = styled.div` && {
  ${({ theme }) => css`${theme.components.collapsibleCard.CHeader}`}
}`

export const CTitle = styled.div` && {
  ${({ theme }) => css`${theme.components.collapsibleCard.CTitle}`}
}`

export const CSubtitle = styled.div` && {
  ${({ theme }) => css`${theme.components.collapsibleCard.CSubtitle}`}
}`

export const ResizeContainer = styled.div` && {
  ${({ theme }) => css`${theme.components.collapsibleCard.ResizeContainer}`}
}`

export const ContentContainer = styled.div` && {
  ${({ theme }) => css`${theme.components.collapsibleCard.ContentContainer}`}
}`

export const Content = styled.div` && {
  ${({ theme }) => css`${theme.components.collapsibleCard.Content}`}
}`
