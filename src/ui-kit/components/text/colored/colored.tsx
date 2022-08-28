import { FC, memo, ReactNode } from 'react';

import { StyledColoredText } from "./styled";


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
    color,
    size,
    weight,
  }
): JSX.Element => {
  return (
    <StyledColoredText
      color={color}
      size={size}
      weight={weight}
    >
      {children}
    </StyledColoredText>
  );
});

export default ColoredText;
