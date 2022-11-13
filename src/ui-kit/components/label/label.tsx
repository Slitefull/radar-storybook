import { FC, memo, ReactNode } from "react";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { LabelPositions, LabelSizes, LabelTypes, LabelWeights } from "./types";
import { SLabel } from "./styled";


interface LabelProps {
  type?: LabelTypes;
  color?: Color;
  size?: LabelSizes;
  weight?: LabelWeights;
  position?: LabelPositions;
  disabled?: boolean;
  cursor?: "default" | "pointer" | "not-allowed";
  margin?: string;
  wrap?: boolean;
  onClick?: VoidFunction;
  children: ReactNode;
}

const Label: FC<LabelProps> = memo((
  {
    type = "primary",
    color = PLUMP_PURPLE,
    size = "default",
    weight = "default",
    position = "left",
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
      type={type}
      color={color}
      size={size}
      weight={weight}
      position={position}
      disabled={disabled}
      cursor={onClick ? "pointer" : cursor}
      margin={margin}
      wrap={wrap}
      onClick={onClick}
      withHover={!!onClick}
    >
      {children}
    </SLabel>
  )
});

export default Label;
