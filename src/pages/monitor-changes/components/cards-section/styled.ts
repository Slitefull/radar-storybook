import styled from "styled-components";
import { css } from "styled-components/macro";
import { Swiper } from "swiper/react";


export const StyledSwiper = styled(Swiper)` && {
  ${({ theme }) => css`${theme.components.monitorChangesPage.StyledSwiper}`}
}`
