import { css } from "styled-components/macro";
import { PRIMARY_60, NEUTRAL_00 } from "@/ui-kit/constants/colors";


const SFreshRating = css`
  font-family: "Menlo",serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  width: fit-content;
  letter-spacing: -0.02em;
  color: ${PRIMARY_60};
  background: ${NEUTRAL_00};
  border: 1px solid ${PRIMARY_60};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 7px;
  padding: 0 5px;
`;

export const fresh = {
  SFreshRating,
};
