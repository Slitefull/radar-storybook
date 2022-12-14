import { css } from "styled-components/macro";
import { SUPPORT_2_60, NEUTRAL_10 } from "@/ui-kit/constants/colors";


const BellIconWrapper = css`
  position: relative;
`;

const Count = css`
  padding: 3px;
  background: ${SUPPORT_2_60};
  border-radius: 5px;
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_10};
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 999999;
`;

export const bell = {
  BellIconWrapper,
  Count,
};
