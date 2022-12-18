import { css } from "styled-components/macro";
import { PRIMARY_60, NEUTRAL_00 } from "@/ui-kit/constants/colors";


const SHotRating = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background: ${NEUTRAL_00};
  border: 1px solid ${PRIMARY_60};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  cursor: pointer;
`;

export const hot = {
  SHotRating,
};
