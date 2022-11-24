import { FC, memo, ReactNode } from "react";
import { DARK_LAVA } from "@/ui-kit/constants/colors";

import { SColoredText } from "./styled";


type Types = "primary" | "secondary";
type Size = "default" | "big" | "small";
type Weight = "default" | "bold";

interface ColoredTextProps {
  type?: Types;
  color?: Color;
  size?: Size;
  weight?: Weight;
  children: ReactNode;
  cursor?: "default" | "pointer" | "not-allowed";
  margin?: string;
  onClick?: VoidFunction;
}

const ColoredText: FC<ColoredTextProps> = memo((
  {
    children,
    type = "primary",
    color = DARK_LAVA,
    size = "default",
    weight = "default",
    cursor = "default",
    margin = "0",
    onClick,
  }
): JSX.Element => {
  return (
    <SColoredText
      type={type}
      color={color}
      size={size}
      weight={weight}
      onClick={onClick}
      cursor={!!onClick ? "pointer" : cursor}
      margin={margin}
    >
      {children}
    </SColoredText>
  );
});

export default ColoredText;
