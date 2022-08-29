import styled from "styled-components";
import { css } from "styled-components/macro";
import { Swiper } from "swiper/react";


export const SSwiper = styled(Swiper)` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.SSwiper}`}
}`
