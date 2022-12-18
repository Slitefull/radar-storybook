import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from "styled-components";
import { css } from "styled-components/macro";

import { STextProps } from "../../types";


type Size = "small" | "default" | "big" | "xl";
type Weight = "default" | "bold";
type Types = "primary" | "secondary";

const FontSizeRecord: Record<Size, string> = {
  "small": "12px",
  "default": "14px",
  "big": "18px",
  "xl": "20px",
};

const FontWeightRecord: Record<Weight, number> = {
  "default": 400,
  "bold": 700,
};

const TypesRecord: Record<Types, string> = {
  "primary": "FreightSans Pro",
  "secondary": "Menlo",
};

const SText: FlattenInterpolation<ThemedStyledProps<STextProps, DefaultTheme>> = css<STextProps>`
  font-family: ${({ type }) => TypesRecord[type]}, serif;
  font-weight: ${({ weight }) => FontWeightRecord[weight]};
  font-size: ${({ size }) => FontSizeRecord[size]};
  border-radius: ${({ rounded }) => rounded ? "50%" : 0};
  text-align: ${({ textAlign }) => textAlign};
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  margin: ${({ margin }) => margin};
  transition: .2s color ease-in;
  
  ${({ background }) => background && css`
    background: ${background};
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  `};

  ${({ rounded }) => rounded && css`
    min-height: 25px;
    min-width: 25px;
  `};
  
  ${({ hoverColor }) => hoverColor && css`
    &:hover {
      color: ${hoverColor};
      transition: .2s color ease-in;
    }
  `};
`;

export const text = {
  SText,
};
