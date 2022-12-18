import { DefaultTheme, FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
import { css, FlattenSimpleInterpolation } from "styled-components/macro";
import { NEUTRAL_90, NEUTRAL_20, PRIMARY_60, TRANSPARENT, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { ButtonColors, ButtonSizes, SButtonProps } from "../../types";


const primary: ReadonlyArray<SimpleInterpolation> = css`
  background: ${PRIMARY_60};
  font-weight: 700;
  color: ${NEUTRAL_00};
  border: 1px solid ${TRANSPARENT};

  &:hover {
    background: ${NEUTRAL_00};
    border: 1px solid ${PRIMARY_60};
    color: ${PRIMARY_60};
  }
`;

const secondary: ReadonlyArray<SimpleInterpolation> = css`
  background: ${NEUTRAL_00};
  font-weight: 700;
  color: ${PRIMARY_60};
  border: 1px solid ${PRIMARY_60};

  &:hover {
    background: ${PRIMARY_60};
    border: 1px solid ${TRANSPARENT};
    color: ${NEUTRAL_00};
  }
`;

const ghost: ReadonlyArray<SimpleInterpolation> = css`
  font-family: "Menlo", serif;
  background: ${TRANSPARENT};
  font-weight: 400;
  color: ${NEUTRAL_90};
  border: 1px solid ${NEUTRAL_20};

  &:hover {
    background: ${NEUTRAL_00};
    border: 1px solid ${PRIMARY_60};
    color: ${NEUTRAL_90};
  }
`;

const defaultSize: ReadonlyArray<SimpleInterpolation> = css`
  font-size: 18px;
  line-height: 24px;
  height: 40px;
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
  font-family: "FreightSans Pro", serif;
  width: 100%;
  max-width: 325px;
  padding: 5px 25px;
  border-radius: ${({ rounded }) => rounded ? "35px" : "4px"};
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: 0.2s background ease-out, 0.2s border ease-in, 0.2s color ease-in, 0.2s border-radius ease-in;

  ${({ color }) => css`${ButtonColorsRecord[color]}`};
  ${({ size }) => css`${ButtonSizesRecord[size]}`};

  &:disabled {
    opacity: .3;
    cursor: not-allowed;
  }

  &:hover {
    transition: 0.2s background ease-out, 0.2s border ease-in, 0.2s color ease-in, 0.2s border-radius ease-in;
  }
`;

export const button = {
  SButton,
};
