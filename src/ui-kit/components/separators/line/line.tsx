import { FC, memo } from "react";
import { PLATINUM } from "@/ui-kit/constants/colors";

import { SLineSeparator } from "./styled";


interface LineSeparatorProps {
  height?: string;
  width?: string;
  radius?: number;
  color?: Color;
}

const LineSeparator: FC<LineSeparatorProps> = memo((
  {
    color = PLATINUM,
    height = "1px",
    width = "100%",
    radius = 0,
  }
): JSX.Element => {
  return (
    <SLineSeparator
      color={color}
      height={height}
      width={width}
      radius={radius}
    />
  );
});

export default LineSeparator;
