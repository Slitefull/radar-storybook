import { DefaultTheme, FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { DARK_LAVA, LAVENDER, PLUMP_PURPLE, ROCKET_METALLIC, TRANSPARENT } from "@/ui-kit/constants/colors";
import { LinkColor, LinkSize, StyledLinkProps, WithIconWrapperProps } from "../../types";


const DEFAULT_COLOR = 'default';
const DEFAULT_SIZE = 'default';

const defaultLink: ReadonlyArray<SimpleInterpolation> = css`
  font-family: "Menlo", serif;
  font-weight: 400;
  color: ${DARK_LAVA};
`;

const text: ReadonlyArray<SimpleInterpolation> = css`
  font-weight: 700;
  color: ${PLUMP_PURPLE};

  hover: {
    color: ${LAVENDER};
  }
`;

const gray: ReadonlyArray<SimpleInterpolation> = css`
  font-weight: 400;
  color: ${ROCKET_METALLIC};
`;

const defaultLinkBorders = css`
  border-bottom: 1px solid ${DARK_LAVA};

  &:hover {
    border-bottom: 1px solid ${TRANSPARENT};
  }
`;

const textBorders = css`
  border-bottom: 1px solid ${TRANSPARENT};

  &:hover {
    border-bottom: 1px solid ${TRANSPARENT};
  }
`;

const grayBorders = css`
  border-bottom: 1px solid ${ROCKET_METALLIC};

  &:hover {
    border-bottom: 1px solid ${TRANSPARENT};
  }
`;

const defaultSize: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 18px;
  line-height: 24px;
  min-height: 35px;
`

const smallSize: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 14px;
  line-height: 19px;
  min-height: 30px;
`

const LinkColorsRecord: Record<LinkColor, FlattenSimpleInterpolation> = {
  ["default"]: defaultLink,
  ["text"]: text,
  ["gray"]: gray,
};

const LinkSizesRecord: Record<LinkSize, FlattenSimpleInterpolation> = {
  ["default"]: defaultSize,
  ["small"]: smallSize,
};

const LinkBordersRecord: Record<LinkColor, FlattenSimpleInterpolation> = {
  ["default"]: defaultLinkBorders,
  ["text"]: textBorders,
  ["gray"]: grayBorders,
};

const StyledLink: FlattenInterpolation<ThemedStyledProps<StyledLinkProps, DefaultTheme>> = css<StyledLinkProps>`
  border: none;
  background: TRANSPARENT;
  letter-spacing: -0.02em;
  cursor: pointer;

  ${({ color }) => css`${LinkColorsRecord[color || DEFAULT_COLOR]}`};
  ${({ size }) => css`${LinkSizesRecord[size || DEFAULT_SIZE]}`};
`

const WithIconWrapper = css<WithIconWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 10px;
  width: fit-content;
  cursor: pointer;
  transition: .2s border-bottom ease-out, .2s opacity;

  ${({ color }) => css`${LinkBordersRecord[color || DEFAULT_COLOR]}`};
  
  &:hover {
    opacity: .8;
    transition: .2s border-bottom ease-out, .2s opacity;
  }
`

export const link = {
  StyledLink,
  WithIconWrapper,
};
