import styled from "styled-components";
import { Swiper } from "swiper/react";
import { css } from "styled-components/macro";

import { PaginationBulletProps, PaginationProps } from "./types";


export const SFieldset = styled.fieldset` && {
  ${({ theme }) => css`${theme.components.swiperText.SFieldset}`}
}`

export const SSwiper = styled(Swiper)` && {
  ${({ theme }) => css`${theme.components.swiperText.SSwiper}`}
}`

export const Pagination = styled.legend<PaginationProps>` && {
  ${({ theme }) => css`${theme.components.swiperText.Pagination}`}
}`

export const PaginationBullet = styled.span<PaginationBulletProps>` && {
  ${({ theme }) => css`${theme.components.swiperText.PaginationBullet}`}
}`
