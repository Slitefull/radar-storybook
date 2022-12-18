import { ChangeEvent, FC, memo, } from "react";
import Label from "../../typography/label";

import { LabelPositions, LabelSizes, LabelWeights } from "../../typography/label/types";
import { RWrapper, SRadio } from "./styled";


type RadioChangeEvent = ChangeEvent<{ value: string }>;

export interface RadioProps {
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  onChange: (e: RadioChangeEvent) => void;
  value?: string | number;
  label: string;
  labelPosition?: LabelPositions;
  labelColor?: Color
  labelSize?: LabelSizes;
  labelWeight?: LabelWeights;
}

const Radio: FC<RadioProps> = memo((
  {
    checked,
    name,
    label,
    onChange,
    disabled,
    value,
    labelColor,
    labelPosition = "left",
    labelSize,
    labelWeight,
  }
): JSX.Element => {
  return (
    <RWrapper>
      <Label
        color={labelColor}
        disabled={disabled}
        size={labelSize}
        weight={labelWeight}
        position={labelPosition}
        cursor={"pointer"}
      >
        <span>{label}</span>
        <SRadio
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
      </Label>
    </RWrapper>
  )
});

export default Radio;
