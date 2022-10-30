import { css } from "styled-components/macro";
import { DARK_GREY, GHOST_WHITE, LIME_GREEN, PLUMP_PURPLE, SNOW, TART_ORANGE, WHITE } from "@/ui-kit/constants/colors";

import { RankProps, RankWrapperProps, SRankingProps } from "../../types";


const SRanking = css<SRankingProps>`
  display: flex;
  flex-direction: row;
  background-color: ${PLUMP_PURPLE};
  border: 1px solid ${PLUMP_PURPLE};
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
      border: 1px solid ${PLUMP_PURPLE};
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
  color: ${SNOW};
  margin: auto;
`;

const RankWrapper = css<RankWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 5px;
  background-color: ${({ isHovered }) => isHovered ? GHOST_WHITE : WHITE};
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
  color: ${DARK_GREY};
`;

const Rank = css<RankProps>`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({ isPositive }) => isPositive ? LIME_GREEN : TART_ORANGE};
`;

export const ranking = {
  SRanking,
  RNumber,
  RNeutral,
  RankWrapper,
  RIcon,
  Rank,
};
