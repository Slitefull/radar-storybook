import styled from "styled-components";
import { Swiper } from "swiper/react";

import { PaginationBulletProps, PaginationProps } from "./types";


export const SFieldset = styled.fieldset`
  ${({ theme }) => theme.components.sliders.text.SFieldset}
`;

export const SSwiper = styled(Swiper)`
  ${({ theme }) => theme.components.sliders.text.SSwiper}
`;

export const Pagination = styled.legend<PaginationProps>`
  ${({ theme }) => theme.components.sliders.text.Pagination}
`;

export const PaginationBullet = styled.span<PaginationBulletProps>`
  ${({ theme }) => theme.components.sliders.text.PaginationBullet}
`;
