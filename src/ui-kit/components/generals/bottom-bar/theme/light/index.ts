import { css } from "styled-components/macro";
import { NEUTRAL_10, TRANSPARENT } from "@/ui-kit/constants/colors";


const SBottomBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  z-index: 999999;
  position: fixed;
  bottom: 0;
  opacity: 0.75;
  background-color: rgba(81, 39, 155);
  backdrop-filter: blur(2.5px);
  padding: 0 35px 0 110px;
`;

const Selected = css`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_10};
`;

const Count = css`
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_10};
`;

const TextButton = css`
  font-family: 'FreightSans Pro', serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_10};
  cursor: pointer;
  white-space: nowrap;
`;

const ActionButton = css`
  height: 35px;
  font-family: 'FreightSans Pro',serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  border: 1px solid ${NEUTRAL_10};
  border-radius: 4px;
  color: ${NEUTRAL_10};
  padding: 0 15px;
  background-color: ${TRANSPARENT};
  white-space: nowrap;
  cursor: pointer;
`;

export const bottomBar = {
  SBottomBar,
  Selected,
  Count,
  TextButton,
  ActionButton
};
