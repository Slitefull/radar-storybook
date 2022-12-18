import { css } from "styled-components/macro";
import {
  NEUTRAL_50,
  SUPPORT_4_50,
  PRIMARY_60,
  NEUTRAL_10,
  SUPPORT_2_50,
  NEUTRAL_00,
  NEUTRAL_30
} from "@/ui-kit/constants/colors";

import { RankProps, RankWrapperProps, SRankingProps } from "../../types";


const SRanking = css<SRankingProps>`
  display: flex;
  flex-direction: row;
  background-color: ${PRIMARY_60};
  border: 1px solid ${PRIMARY_60};
  border-radius: 15px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  gap: 0 8px;
  cursor: pointer;
  position: relative;

  ${({ active }) => active && css`
    &:after {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border-radius: 15px;
      border: 1px solid ${PRIMARY_60};
      z-index: -1;
    }
  `}
`;

const RNumber = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_10};
  margin: auto;
`;

const RankWrapper = css<RankWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 5px;
  background-color: ${({ isHovered }) => isHovered ? NEUTRAL_30 : NEUTRAL_00};
  border-radius: 10px 11px 11px 10px;
  padding: ${({ hasRank }) => hasRank ? "3px 5px" : "3px 10px"};
  margin-left: auto;
  transition: .2s background-color;
`;

const RIcon = css`
  margin: auto;
  position: absolute;
  transform: translateY(-17px);
`;

const RNeutral = css`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_50};
`;

const Rank = css<RankProps>`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({ isPositive }) => isPositive ? SUPPORT_4_50 : SUPPORT_2_50};
`;

export const ranking = {
  SRanking,
  RNumber,
  RNeutral,
  RankWrapper,
  RIcon,
  Rank,
};
