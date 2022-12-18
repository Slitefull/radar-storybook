import { ChangeEvent, FC, memo } from "react";
import Label from "../../typography/label";

import { MText, SMeridian } from "./styled";


type RadioChangeEvent = ChangeEvent<{ value: string }>;

interface MeridianProps {
  checked?: boolean;
  name: string;
  label: string;
  onChange: (e: RadioChangeEvent) => void;
  disabled?: boolean;
}

const Meridian: FC<MeridianProps> = memo((
  {
    checked,
    name,
    label,
    onChange,
    disabled,
  }
): JSX.Element => {
  return (
    <Label disabled={disabled}>
      <SMeridian
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <MText>{label}</MText>
    </Label>
  );
});

export default Meridian;
