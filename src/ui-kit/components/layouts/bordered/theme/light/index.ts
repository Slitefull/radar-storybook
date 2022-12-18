import { css } from "styled-components/macro";
import { NEUTRAL_20, PRIMARY_60, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { SBorderedLayoutProps } from "../../types";


const SBorderedLayout = css<SBorderedLayoutProps>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadow }) => shadow};
  min-height: ${({ minHeight = "auto" }) => minHeight};
  background: ${NEUTRAL_00};
  border: 1px solid ${NEUTRAL_20};
  border-radius: 8px;
  position: relative;
`;

const BackIconWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 32px;
  top: 45px;
  cursor: pointer;
  font-family: 'FreightSans Pro', serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${PRIMARY_60};
`;

export const bordered = {
  SBorderedLayout,
  BackIconWrapper,
};
