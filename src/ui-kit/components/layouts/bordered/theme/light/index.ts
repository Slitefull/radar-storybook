import { css } from "styled-components/macro";
import { PLATINUM, WHITE } from "@/ui-kit/constants/colors";

import { SBorderedLayoutProps } from "../../types";


const SBorderedLayout = css<SBorderedLayoutProps>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${WHITE};
  border: 1px solid ${PLATINUM};
  border-radius: 8px;
`;

export const bordered = {
  SBorderedLayout,
};
