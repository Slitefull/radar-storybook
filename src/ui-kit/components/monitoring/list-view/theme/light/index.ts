import { css } from "styled-components/macro";
import { NEUTRAL_100 } from "@/ui-kit/constants/colors";

import { TopInfoTextProps } from "../../types";


const TopInfoText = css<TopInfoTextProps>`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: ${({ isBig }) => isBig ? 20 : 14}px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
  text-decoration: ${({ withDecoration }) => withDecoration ? "underline" : "none"};
`;

export const listView = {
  TopInfoText,
};
