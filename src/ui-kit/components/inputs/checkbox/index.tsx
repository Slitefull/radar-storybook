import { FC, memo } from "react";
import Label from "@/ui-kit/components/label";

import { LabelPositions, LabelSizes, LabelWeights } from "@/ui-kit/components/label/types";
import { CWrapper, SCheckbox } from "./styled";
import { Column } from "@/global.css";


interface CheckboxProps {
  checked: boolean;
  onChange?: VoidFunction;
  name?: string;
  disabled?: boolean;
  label?: string;
  labelPosition?: LabelPositions;
  labelColor?: Color;
  labelSize?: LabelSizes;
  labelWeight?: LabelWeights;
  subtitleColor?: Color;
  subtitleSize?: LabelSizes;
  subtitleWeight?: LabelWeights;
  subtitle?: string;
}

const Checkbox: FC<CheckboxProps> = memo((
  {
    checked,
    onChange,
    name,
    disabled,
    label,
    labelColor,
    labelPosition = "left",
    labelSize,
    labelWeight,
    subtitle,
    subtitleColor,
    subtitleSize,
    subtitleWeight,
  }
): JSX.Element => {
  return (
    <CWrapper labelPosition={labelPosition}>
      <Column gap={10}>
        {label && (
          <Label
            color={labelColor}
            size={labelSize}
            weight={labelWeight}
          >
            {label}
          </Label>
        )}
        {subtitle && (
          <Label
            color={subtitleColor}
            size={subtitleSize}
            weight={subtitleWeight}
            $wrap={true}
          >
            {subtitle}
          </Label>
        )}
      </Column>
      <SCheckbox
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    </CWrapper>
  );
});

export default Checkbox;
