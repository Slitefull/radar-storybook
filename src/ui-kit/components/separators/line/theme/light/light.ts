import { css } from "styled-components/macro";

import { SLineSeparatorProps } from "../../types";


const SLineSeparator = css<SLineSeparatorProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => `${radius}px`};
  background-color: ${({ color }) => color};
`;

export const lineSeparator = {
  SLineSeparator,
};
