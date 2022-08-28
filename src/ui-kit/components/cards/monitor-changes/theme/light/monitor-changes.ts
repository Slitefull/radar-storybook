import { css } from "styled-components/macro";
import { LIME_GREEN, PLATINUM, RAISIN_BLACK, TART_ORANGE, WHITE } from "@/ui-kit/constants/colors";

import { PercentageProps } from "../../types";


const CardWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 14px 12px;
  background: ${WHITE};
  border: 1px solid ${PLATINUM};
  border-radius: 8px;
  max-width: 280px;
  grid-gap: 0 30px;
  position: relative;
`

const LeftSide = css`
  display: grid;
  grid-template-rows: 40px auto;
`

const RightSide = css`
  display: grid;
  grid-template-rows: 40px auto;
`

const CardLink = css`
  font-family: 'Menlo', serif;
  display: inline;
  width: fit-content;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: ${RAISIN_BLACK};
  word-break: break-word;
`

const TotalText = css`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${RAISIN_BLACK};
  white-space: nowrap;
`

const TotalNumbers = css`
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${RAISIN_BLACK};
`

const Percentage = css<PercentageProps>`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${({ isPositive }) => isPositive ? TART_ORANGE : LIME_GREEN};
`

const ChartInfoWrapper = css`
  display: grid;
  grid-template-rows: 30px 25px 25px 25px;
  grid-gap: 15px 0;
`

const ChartInfo = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 15px;
`

const ChartInfoText = css`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: ${RAISIN_BLACK};
`

const HorizontalLine = css`
  background: ${PLATINUM};
  color: transparent;
  border: none;
  border-radius: 5px;
  height: 1px;
  width: 254px;
  position: absolute;
  top: 90px;
  bottom: 0;
`

export const monitorChangesCard = {
  CardWrapper,
  LeftSide,
  RightSide,
  CardLink,
  TotalText,
  TotalNumbers,
  Percentage,
  ChartInfo,
  ChartInfoWrapper,
  ChartInfoText,
  HorizontalLine,
}
