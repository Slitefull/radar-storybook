import styled from "styled-components";

import { STagProps, STTitleProps } from "./types";


export const STag = styled.div<STagProps>`
  ${({ theme }) => theme.components.bullets.tag.STag}
`;

export const Circle = styled.div`
  ${({ theme }) => theme.components.bullets.tag.Circle}
`;

export const SecondCircle = styled.div`
  ${({ theme }) => theme.components.bullets.tag.SecondCircle}
`;

export const TTitle = styled.span<STTitleProps>`
  ${({ theme }) => theme.components.bullets.tag.TTitle}
`;