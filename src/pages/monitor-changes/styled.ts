import styled from "styled-components";
import { Swiper } from "swiper/react";


export const SSwiper = styled(Swiper)`
  ${({ theme }) => theme.components.pages.monitorChanges.SSwiper}
`;

export const CardsSectionHeaderWrapper = styled.div`
  ${({ theme }) => theme.components.pages.monitorChanges.CardsSectionHeaderWrapper}
`;

export const HeaderSideWrapper = styled.div`
  ${({ theme }) => theme.components.pages.monitorChanges.HeaderSideWrapper}
`;

export const SMonitorTable = styled.div`
  ${({ theme }) => theme.components.pages.monitorChanges.SMonitorTable}
`;

export const TControls = styled.div`
  ${({ theme }) => theme.components.pages.monitorChanges.TControls}
`;

export const TDropdowns = styled.div`
  ${({ theme }) => theme.components.pages.monitorChanges.TDropdowns}
`;

export const SCardsSectionFallback = styled.div`
  ${({ theme }) => theme.components.pages.monitorChanges.SCardsSectionFallback}
`;

export const FallbackRow = styled.div`
  ${({ theme }) => theme.components.pages.monitorChanges.FallbackRow}
`;
