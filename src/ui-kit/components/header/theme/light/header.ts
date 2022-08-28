import { css } from "styled-components/macro";
import { media } from "@/ui-kit/helpers/media";
import { breakpoints } from "@/ui-kit/constants/breakpoints";
import { DARK_LAVA } from "@/ui-kit/constants/colors";


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
  padding: 40px 60px;
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

export const header = {
  LeftSide,
  RightSide,
  HeaderWrapper,
  HeaderTitle,
}
