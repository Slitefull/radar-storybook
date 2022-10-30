import { DefaultTheme, FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { DARK_LAVA, PLATINUM, PLUMP_PURPLE, TRANSPARENT, WHITE } from "@/ui-kit/constants/colors";

import { ButtonColors, ButtonSizes, SButtonProps } from "../../types";


const primary: ReadonlyArray<SimpleInterpolation> = css`
  background: ${PLUMP_PURPLE};
  font-weight: 700;
  color: ${WHITE};
  border: 1px solid ${TRANSPARENT};

  &:hover {
    background: ${WHITE};
    border: 1px solid ${PLUMP_PURPLE};
    color: ${PLUMP_PURPLE};
  }
`;

const secondary: ReadonlyArray<SimpleInterpolation> = css`
  background: ${WHITE};
  font-weight: 700;
  color: ${PLUMP_PURPLE};
  border: 1px solid ${PLUMP_PURPLE};

  &:hover {
    background: ${PLUMP_PURPLE};
    border: 1px solid ${TRANSPARENT};
    color: ${WHITE};
  }
`;

const ghost: ReadonlyArray<SimpleInterpolation> = css`
  font-family: "Menlo", serif;
  background: ${TRANSPARENT};
  font-weight: 400;
  color: ${DARK_LAVA};
  border: 1px solid ${PLATINUM};

  &:hover {
    background: ${WHITE};
    border: 1px solid ${PLUMP_PURPLE};
    color: ${DARK_LAVA};
  }
`;

const defaultSize: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 18px;
  line-height: 24px;
  height: 35px;
`;

const smallSize: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 14px;
  line-height: 19px;
  height: 30px;
`;

const ButtonSizesRecord: Record<ButtonSizes, FlattenSimpleInterpolation> = {
  "default": defaultSize,
  "small": smallSize,
};

const ButtonColorsRecord: Record<ButtonColors, FlattenSimpleInterpolation> = {
  "primary": primary,
  "secondary": secondary,
  "ghost": ghost,
};

const SButton: FlattenInterpolation<ThemedStyledProps<SButtonProps, DefaultTheme>> = css<SButtonProps>`
  padding: 5px 25px;
  border-radius: ${({ rounded }) => rounded ? "35px" : "4px"};
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: 0.2s background ease-out, 0.2s border ease-in, 0.2s color ease-in, 0.2s border-radius ease-in;

  ${({ color }) => css`${ButtonColorsRecord[color]}`};
  ${({ size }) => css`${ButtonSizesRecord[size]}`};

  &:disabled {
    pointer-events: none;
    opacity: .3;
  }

  &:hover {
    transition: 0.2s background ease-out, 0.2s border ease-in, 0.2s color ease-in, 0.2s border-radius ease-in;
  }
`;

export const button = {
  SButton,
};
