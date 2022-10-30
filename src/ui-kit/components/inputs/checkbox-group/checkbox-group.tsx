import { FC, memo, ReactNode, } from "react";
import Label from "../../label/label";

import { LabelColors, LabelPositions, LabelSizes } from "@/ui-kit/components/label/types";
import { Column, Row } from "@/global.css";
import { CGWrapper } from "./styled";


type Directions = "row" | "column";

export interface RadioGroupProps {
  children: ReactNode;
  direction?: Directions;
  gap?: number;
  label?: string;
  labelColor?: LabelColors;
  labelPosition?: LabelPositions;
  labelSize?: LabelSizes;
  labelMargin?: string;
}

const CheckboxGroup: FC<RadioGroupProps> = memo(
  (
    {
      children,
      direction,
      label,
      labelColor = "primary",
      labelPosition = "top",
      labelSize = "default",
      labelMargin = "0",
      gap = 0,
    }
  ): JSX.Element => {
    let Component = Row;

    if (direction === "column") {
      Component = Column;
    }

    return (
      <CGWrapper
        labelPosition={labelPosition}
        withLabel={!!label}
      >
        <Label
          color={labelColor}
          size={labelSize}
          margin={labelMargin}
        >
          {label}
        </Label>
        <Component gap={gap}>
          {children}
        </Component>
      </CGWrapper>
    )
  }
);

export default CheckboxGroup;
