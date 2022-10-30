import { css } from "styled-components/macro";
import { DARK_LAVA } from "@/ui-kit/constants/colors";


const PageTitle = css`
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`;

const SliderElement = css`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`;

const TooltipText = css`
  font-family: 'Menlo', serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`;

export const addDomain = {
  PageTitle,
  SliderElement,
  TooltipText,
};
