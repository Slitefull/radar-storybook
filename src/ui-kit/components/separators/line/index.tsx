import { FC, memo } from "react";
import { NEUTRAL_20 } from "@/ui-kit/constants/colors";

import { SLineSeparator } from "./styled";


type LineTypes = "horizontal" | "vertical";
type Variants = "solid" | "dashed" | "dotted";

interface LineSeparatorProps {
  type?: LineTypes;
  variant?: Variants;
  width?: string;
  radius?: number;
  color?: Color;
}

const LineSeparator: FC<LineSeparatorProps> = memo((
  {
    type = "horizontal",
    variant = "solid",
    color = NEUTRAL_20,
    width = "100%",
    radius = 0,
  }
): JSX.Element => {
  return (
    <SLineSeparator
      type={type}
      $color={color}
      width={width}
      radius={radius}
      variant={variant}
    />
  );
});

export default LineSeparator;
