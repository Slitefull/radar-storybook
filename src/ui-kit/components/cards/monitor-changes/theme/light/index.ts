import { css } from "styled-components/macro";
import { NEUTRAL_00, NEUTRAL_100, NEUTRAL_20 } from "@/ui-kit/constants/colors";


const CardWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 14px 12px;
  background: ${NEUTRAL_00};
  border: 1px solid ${NEUTRAL_20};
  border-radius: 8px;
  width: 290px;
  height: 220px;
  grid-gap: 0 30px;
  position: relative;
`;

const LeftSide = css`
  display: grid;
  grid-template-rows: 40px auto;
`;

const RightSide = css`
  display: grid;
  grid-template-rows: 40px auto;
`;

const CardName = css`
  font-family: "Menlo", serif;
  display: inline;
  width: fit-content;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: ${NEUTRAL_100};
  word-break: break-word;
  cursor: pointer;
  transition: .2s opacity ease-in;

  &:hover {
    opacity: .8;
    transition: .2s opacity ease-in;
  }
`;

const TotalText = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
  white-space: nowrap;
`;

const TotalNumbers = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
`;

const ChartInfoWrapper = css`
  display: grid;
  grid-template-rows: 30px 25px 25px 25px;
  grid-gap: 15px 0;
`;

const ChartInfo = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 15px;
`;

const ChartInfoText = css`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: ${NEUTRAL_100};
`;

const HorizontalLine = css`
  background: ${NEUTRAL_20};
  color: transparent;
  border: none;
  border-radius: 5px;
  height: 1px;
  width: 254px;
  position: absolute;
  top: 90px;
  bottom: 0;
`;

export const monitorChanges = {
  CardWrapper,
  LeftSide,
  RightSide,
  CardName,
  TotalText,
  TotalNumbers,
  ChartInfo,
  ChartInfoWrapper,
  ChartInfoText,
  HorizontalLine,
};
