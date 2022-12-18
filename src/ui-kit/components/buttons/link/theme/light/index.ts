import { DefaultTheme, FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { PRIMARY_30, PRIMARY_60 } from "@/ui-kit/constants/colors";

import { LinkSize, SLinkProps, WithIconWrapperProps } from "../../types";


const defaultSize: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 18px;
  line-height: 24px;
  min-height: 35px;
`;

const smallSize: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 14px;
  line-height: 19px;
  min-height: 30px;
`;

const LinkSizesRecord: Record<LinkSize, FlattenSimpleInterpolation> = {
  "default": defaultSize,
  "small": smallSize,
};

const WithIconWrapper = css<WithIconWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 10px;
  width: fit-content;
  cursor: pointer;
  transition: .2s opacity;
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
`;

const SLink: FlattenInterpolation<ThemedStyledProps<SLinkProps, DefaultTheme>> = css<SLinkProps>`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.02em;
  color: ${PRIMARY_60};
  border: none;
  background-color: TRANSPARENT;
  cursor: pointer;
  transition: .2s color, .2s opacity;

  ${({ size }) => css`${LinkSizesRecord[size]}`};

  &:hover {
    color: ${PRIMARY_30};
    transition: .2s color, .2s opacity;
  }
  
  &:disabled {
    opacity: .3;
    pointer-events: none;
  }
`;

export const link = {
  WithIconWrapper,
  SLink,
};
