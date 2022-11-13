import { css } from "styled-components/macro";
import { media } from "@/ui-kit/helpers/media";
import { breakpoints } from "@/ui-kit/constants/breakpoints";


const SPContainer = css`
  padding: 0 32px 40px 112px;

  ${media("padding", "px", [
    { [breakpoints.md]: "0 40" },
  ])};

  ${media("padding", "px", [
    { [breakpoints.sm]: "0 20" },
  ])};
`;

export const simplePage = {
  SPContainer,
};
