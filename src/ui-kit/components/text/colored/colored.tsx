import { FC, memo, ReactNode } from "react";
import { DARK_LAVA } from "@/ui-kit/constants/colors";

import { SColoredText } from "./styled";


type Size = "default" | "small";
type Weight = "default" | "bold";

interface ColoredTextProps {
  color?: Color;
  size?: Size;
  weight?: Weight;
  children: ReactNode;
}

const ColoredText: FC<ColoredTextProps> = memo((
  {
    children,
    color = DARK_LAVA,
    size = "default",
    weight = "default",
  }
): JSX.Element => {
  return (
    <SColoredText
      color={color}
      size={size}
      weight={weight}
    >
      {children}
    </SColoredText>
  );
});

export default ColoredText;
