import { FC, memo, ReactNode } from "react";
import { NEUTRAL_90 } from "@/ui-kit/constants/colors";

import { SText } from "./styled";


type Types = "primary" | "secondary";
export type TextSize = "small" | "default" | "big" | "xl";
export type TextWeight = "default" | "bold";
type Cursor = "default" | "pointer" | "not-allowed";
type TextAlign = "left" | "center" | "right";

interface TextProps {
  type?: Types;
  color?: Color;
  hoverColor?: Color;
  rounded?: boolean;
  background?: Color;
  size?: TextSize;
  weight?: TextWeight;
  cursor?: Cursor;
  margin?: string;
  textAlign?: TextAlign;
  onClick?: VoidFunction;
  children: ReactNode;
}

const Text: FC<TextProps> = memo((
  {
    children,
    type = "primary",
    color = NEUTRAL_90,
    hoverColor,
    rounded = false,
    background,
    size = "default",
    weight = "default",
    cursor = "default",
    margin = "0",
    textAlign = "left",
    onClick,
  }
): JSX.Element => {
  return (
    <SText
      type={type}
      color={color}
      hoverColor={hoverColor}
      rounded={rounded}
      background={background}
      size={size}
      weight={weight}
      onClick={onClick}
      textAlign={textAlign}
      cursor={!!onClick ? "pointer" : cursor}
      margin={margin}
    >
      {children}
    </SText>
  );
});

export default Text;
