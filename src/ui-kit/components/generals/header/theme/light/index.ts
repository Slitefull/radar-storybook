import { css } from "styled-components/macro";
import { media } from "@/ui-kit/helpers/media";
import { breakpoints } from "@/ui-kit/constants/breakpoints";
import { NEUTRAL_90, PRIMARY_40, PRIMARY_60 } from "@/ui-kit/constants/colors";


const LeftSide = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 25px;
  width: 100%;
`;

const RightSide = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 25px;
`;

const HeaderWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 32px 40px 112px;
  gap: 0 25px;
  align-items: center;

  ${media("padding", "px", [
    { [breakpoints.sm]: 10 },
  ])};
`;

const HeaderTitle = css`
  font-family: "Menlo", serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_90};
`;

const Username = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${PRIMARY_60};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: ${PRIMARY_40};
  }
`;

export const header = {
  LeftSide,
  RightSide,
  HeaderWrapper,
  HeaderTitle,
  Username,
};
