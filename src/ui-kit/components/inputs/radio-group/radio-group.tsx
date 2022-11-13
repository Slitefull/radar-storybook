import { FC, memo, ReactNode, } from "react";
import Label from "../../label/label";

import { LabelPositions, LabelSizes } from "@/ui-kit/components/label/types";
import { Column, Row } from "@/global.css";
import { RGWrapper } from "./styled";


type Directions = "row" | "column";

export interface RadioGroupProps {
  children: ReactNode;
  direction?: Directions;
  gap?: number;
  label?: string;
  labelColor?: Color;
  labelPosition?: LabelPositions;
  labelSize?: LabelSizes;
}

const RadioGroup: FC<RadioGroupProps> = memo(
  (
    {
      children,
      direction,
      gap = 0,
      label,
      labelColor,
      labelPosition = "top",
      labelSize,
    }
  ): JSX.Element => {
    let Component = Row;

    if (direction === "column") {
      Component = Column;
    }

    return (
      <RGWrapper
        labelPosition={labelPosition}
        withLabel={!!label}
      >
        <Label
          color={labelColor}
          size={labelSize}
        >
          {label}
        </Label>
        <Component gap={gap}>
          {children}
        </Component>
      </RGWrapper>
    )
  }
);

export default RadioGroup;
