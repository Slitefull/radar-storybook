import { ChangeEvent, FC, memo, } from "react";
import Label from "../../label/label";

import { LabelColors, LabelPositions, LabelSizes } from "../../label/types";
import { RWrapper, SRadio } from "./styled";


type RadioChangeEvent = ChangeEvent<{ value: string }>;

export interface RadioProps {
  checked?: boolean;
  name: string;
  disabled?: boolean;
  onChange: (e: RadioChangeEvent) => void;
  label: string;
  labelPosition?: LabelPositions;
  labelColor?: LabelColors;
  labelSize?: LabelSizes;
}

const Radio: FC<RadioProps> = memo((
  {
    checked,
    name,
    label,
    onChange,
    disabled,
    labelColor,
    labelPosition = "left",
    labelSize = "default",
  }
): JSX.Element => {
  return (
    <RWrapper labelPosition={labelPosition}>
      <Label
        color={labelColor}
        disabled={disabled}
        size={labelSize}
      >
        {label}
      </Label>
      <SRadio
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </RWrapper>
  )
});

export default Radio;
