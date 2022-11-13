import { css } from "styled-components/macro";
import { WHITE } from "@/ui-kit/constants/colors";

const SMPContainer = css`
  margin: 0 32px 40px 112px;
  padding: 20px;
  background: ${WHITE};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  position: relative;
  min-height: 100vh;
`;

const CloseIconWrapper = css`
  position: absolute;
  right: 20px;
`;

export const modalPage = {
  SMPContainer,
  CloseIconWrapper,
};
