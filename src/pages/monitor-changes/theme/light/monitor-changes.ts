import { css } from "styled-components/macro";

const StyledSwiper = css`
  display: flex;
  flex-direction: column-reverse;
`

const HeaderSideWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 20px;
`

const CardsSectionHeaderWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 20px;
  margin-bottom: 40px;
  justify-content: space-between;
`

const SMonitorTable = css`
  width: 100%;
  margin-top: 50px;
`

const TDropdowns = css`
  display: flex;
  flex-direction: row;
  gap: 0 15px;
`

const TControls = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 20px;
`

export const monitorChangesPage = {
  StyledSwiper,
  CardsSectionHeaderWrapper,
  HeaderSideWrapper,
  SMonitorTable,
  TControls,
  TDropdowns,
}
