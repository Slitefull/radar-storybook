import { css } from "styled-components/macro";
import { NEUTRAL_10, NEUTRAL_60, NEUTRAL_90, TRANSPARENT } from "@/ui-kit/constants/colors";


const STargetURL = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const URLName = css`
  font-family: 'Menlo',serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_90};
`;

const Subtext = css`
  font-family: 'Menlo',serif;
  font-weight: 400;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: ${NEUTRAL_60};
`;

const Changes = css`
  font-family: 'Menlo',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: ${NEUTRAL_90};
`;

export const monitoring = {
  STargetURL,
  URLName,
  Subtext,
  Changes,
};
