import { css } from "styled-components/macro";
import { NEUTRAL_90, PRIMARY_60, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { SRoundedBannerProps } from "../../types";


const SRoundedBanner = css<SRoundedBannerProps>`
  width: 100%;
  background: ${NEUTRAL_00};
  border: 1px solid ${PRIMARY_60};
  border-radius: 10px;
  padding: 12px 25px;
  font-size: 14px;
  line-height: 18px;
  color: ${NEUTRAL_90};
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const rounded = {
  SRoundedBanner,
};
