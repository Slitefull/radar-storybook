import { css } from "styled-components/macro";
import { DARK_LAVA } from "@/ui-kit/constants/colors";
import { keyframes } from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SRadarLoader = css`
  display: flex;
  gap: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = css`
  animation: ${rotate} 2s linear infinite;
`;

const LoaderText = css`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${DARK_LAVA};
`;

export const radar = {
  SRadarLoader,
  LogoWrapper,
  LoaderText,
};
