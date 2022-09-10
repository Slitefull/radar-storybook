import styled from "styled-components";
import { css } from "styled-components/macro";
import { Swiper } from "swiper/react";


export const SSwiper = styled(Swiper)` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.SSwiper}`}
}`

export const CardsSectionHeaderWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.CardsSectionHeaderWrapper}`}
}`

export const HeaderSideWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.HeaderSideWrapper}`}
}`

export const SMonitorTable = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.SMonitorTable}`}
}`

export const TControls = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.TControls}`}
}`

export const TDropdowns = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.TDropdowns}`}
}`

export const SCardsSectionFallback = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.SCardsSectionFallback}`}
}`

export const FallbackRow = styled.div` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.FallbackRow}`}
}`
