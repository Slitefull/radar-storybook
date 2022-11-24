import { ChangeEvent, FC, memo } from "react";
import Label from "@/ui-kit/components/label";

import { DText, SDay } from "./styled";


type RadioChangeEvent = ChangeEvent<{ value: string }>;

interface DayProps {
  checked?: boolean;
  name: string;
  label: string;
  disabled?: boolean;
  onChange: (e: RadioChangeEvent) => void;
}

const DayBullet: FC<DayProps> = memo((
  {
    checked,
    name,
    label,
    onChange,
    disabled,
  }
): JSX.Element => {
  return (
    <Label
      disabled={disabled}
      cursor={"pointer"}
    >
      <SDay
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <DText>{label}</DText>
    </Label>
  );
});

export default DayBullet;
