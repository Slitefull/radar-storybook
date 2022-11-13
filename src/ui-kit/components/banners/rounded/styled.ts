import styled from "styled-components";

import { SRoundedBannerProps } from "./types";


export const SRoundedBanner = styled.div<SRoundedBannerProps>`
  ${({ theme }) => theme.components.banners.rounded.SRoundedBanner}
`;
