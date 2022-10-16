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

const dots = keyframes`
  0% {
    -webkit-mask-position: 0 0, 50% 0, 100% 0
  }
  16.67% {
    -webkit-mask-position: 0 100%, 50% 0, 100% 0
  }
  33.33% {
    -webkit-mask-position: 0 100%, 50% 100%, 100% 0
  }
  50% {
    -webkit-mask-position: 0 100%, 50% 100%, 100% 100%
  }
  66.67% {
    -webkit-mask-position: 0 0, 50% 100%, 100% 100%
  }
  83.33% {
    -webkit-mask-position: 0 0, 50% 0, 100% 100%
  }
  100% {
    -webkit-mask-position: 0 0, 50% 0, 100% 0
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

export const radarLoader = {
  SRadarLoader,
  LogoWrapper,
  LoaderText,
}
