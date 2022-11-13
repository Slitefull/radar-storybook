import { css } from "styled-components/macro";
import { DARK_LAVA, PLUMP_PURPLE, WHITE } from "@/ui-kit/constants/colors";

import { SRoundedBannerProps } from "../../types";


const SRoundedBanner = css<SRoundedBannerProps>`
  width: 100%;
  background: ${WHITE};
  border: 1px solid ${PLUMP_PURPLE};
  border-radius: 10px;
  padding: 12px 25px;
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_LAVA};
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const rounded = {
  SRoundedBanner,
};
