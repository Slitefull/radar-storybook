import { css } from "styled-components/macro";
import { media } from "@/ui-kit/helpers/media";
import { breakpoints } from "@/ui-kit/constants/breakpoints";
import { DARK_LAVA, MEDIUM_PURPLE, PLUMP_PURPLE } from "@/ui-kit/constants/colors";


const LeftSide = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 25px;
  width: 100%;
`

const RightSide = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 25px;
`

const HeaderWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
  gap: 0 25px;
  align-items: center;

  ${media("padding", "px", [
    { [breakpoints.sm]: 10 },
  ])};
`

const HeaderTitle = css`
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`

const Username = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: ${MEDIUM_PURPLE};
  }
`

export const header = {
  LeftSide,
  RightSide,
  HeaderWrapper,
  HeaderTitle,
  Username,
}
