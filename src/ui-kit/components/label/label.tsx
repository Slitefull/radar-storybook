import { FC, memo, ReactNode } from "react";

import { LabelColors, LabelSizes } from "./types";
import { SLabel } from "./styled";


interface LabelProps {
  color?: LabelColors;
  size?: LabelSizes;
  disabled?: boolean;
  cursor?: "default" | "pointer" | "not-allowed";
  margin?: string;
  wrap?: boolean;
  onClick?: VoidFunction;
  children: ReactNode;
}

const Label: FC<LabelProps> = memo((
  {
    color = "primary",
    size = "default",
    disabled = false,
    cursor = "default",
    margin = "0",
    wrap = false,
    onClick,
    children,
  }
): JSX.Element => {
  return (
    <SLabel
      color={color}
      size={size}
      disabled={disabled}
      cursor={onClick ? "pointer" : cursor}
      margin={margin}
      wrap={wrap}
      onClick={onClick}
    >
      {children}
    </SLabel>
  )
});

export default Label;
