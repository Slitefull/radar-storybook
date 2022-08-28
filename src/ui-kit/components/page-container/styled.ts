import styled from "styled-components";
import { media } from "@/ui-kit/helpers/media";
import { breakpoints } from "@/ui-kit/constants/breakpoints";


export const Container = styled.section` && {
  padding: 0 60px 50px;

  ${media("padding", "px", [
    { [breakpoints.md]: "0 40" },
  ])};

  ${media("padding", "px", [
    { [breakpoints.sm]: "0 20" },
  ])};
}`;
