import { css } from "styled-components/macro";
import { PLUMP_PURPLE, WHITE } from "@/ui-kit/constants/colors";


const SFreshRating = css`
  font-family: "Menlo",serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  width: fit-content;
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
  background: ${WHITE};
  border: 1px solid ${PLUMP_PURPLE};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 7px;
  padding: 0 5px;
`;

export const fresh = {
  SFreshRating,
};
