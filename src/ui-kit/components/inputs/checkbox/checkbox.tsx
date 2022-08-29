import { FC, memo } from "react";

import { CheckboxLabel, Indicator, LabelText, SCheckbox } from "./styled";


interface CheckboxProps {
  isChecked: boolean;
  onChange?: () => void;
  name?: string;
  label?: string;
  isDisabled?: boolean;
}

const Checkbox: FC<CheckboxProps> = memo((
  {
    isChecked,
    onChange,
    name,
    label,
    isDisabled
  }
): JSX.Element => {
  return (
    <CheckboxLabel isDisabled={isDisabled}>
      {label && <LabelText>{label}</LabelText>}
      <SCheckbox
        type="checkbox"
        name={name}
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
      />
      <Indicator/>
    </CheckboxLabel>
  );
})

export default Checkbox;
