import { ChangeEvent, FC, memo, } from "react";
import { Label, SRadio } from "./styled";


type RadioChangeEvent = ChangeEvent<{ value: string }>;
type LabelPositions = "left" | "right";

export interface RadioProps {
  checked?: boolean;
  name: string;
  label: string;
  labelPosition?: LabelPositions;
  onChange: (e: RadioChangeEvent) => void;
  disabled?: boolean;
}

const Radio: FC<RadioProps> = memo((
  {
    checked,
    name,
    label,
    onChange,
    disabled,
    labelPosition = "left",
  }
): JSX.Element => {
  return (
    <Label
      disabled={disabled}
      labelPosition={labelPosition}
    >
      <SRadio
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {label}
    </Label>
  )
});

export default Radio;
