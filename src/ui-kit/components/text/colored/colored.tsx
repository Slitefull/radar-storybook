import { FC, memo, ReactNode } from "react";
import { DARK_LAVA } from "@/ui-kit/constants/colors";

import { SColoredText } from "./styled";


type Types = "primary" | "secondary";
type Size = "default" | "big" | "small";
type Weight = "default" | "bold";

interface ColoredTextProps {
  color?: Color;
  size?: Size;
  weight?: Weight;
  children: ReactNode;
  type?: Types;
}

const ColoredText: FC<ColoredTextProps> = memo((
  {
    children,
    type = "primary",
    color = DARK_LAVA,
    size = "default",
    weight = "default",
  }
): JSX.Element => {
  return (
    <SColoredText
      type={type}
      color={color}
      size={size}
      weight={weight}
    >
      {children}
    </SColoredText>
  );
});

export default ColoredText;
