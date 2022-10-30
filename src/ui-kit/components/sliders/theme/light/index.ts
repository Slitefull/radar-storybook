import { css } from "styled-components/macro";
import { PLATINUM, PLUMP_PURPLE, TRANSPARENT } from "@/ui-kit/constants/colors";

import { PaginationBulletProps } from "../../types";


const SFieldset = css`
  background: ${TRANSPARENT};
  border: 1px solid ${PLUMP_PURPLE};
  border-radius: 10px;
  padding: 15px 20px;
  max-width: 400px;
  text-align: center;
`;

const SSwiper = css`
  max-width: 400px;
`;

const Pagination = css`
  display: flex;
  flex-direction: row;
  gap: 0 10px;
  width: fit-content;
  padding: 0 20px;
`;

const PaginationBullet = css<PaginationBulletProps>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? PLUMP_PURPLE : PLATINUM};
  cursor: pointer;
  transition: .2s background-color;
`;

export const text = {
  SFieldset,
  SSwiper,
  Pagination,
  PaginationBullet,
};
