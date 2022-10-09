import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes, memo, ReactNode } from "react";
import useHover from "@/ui-kit/hooks/useHover";

import { HelperText, Label, LabelText, SFormInput, TextInputWrapper, WithIconWrapper } from "./styled";


type IconPosition = "start" | "end";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: VoidFunction;
  onBlur?: VoidFunction;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  value?: any;
  label?: string;
}

const Input: FC<TextInputProps> = memo((
  {
    onChange,
    onFocus,
    onBlur,
    helperText,
    placeholder,
    disabled,
    icon,
    iconPosition = "start",
    value,
    label,
    ...props
  }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLInputElement>();

  return (
    <TextInputWrapper disabled={disabled}>
      <Label withLabel={!!label}>
        <LabelText>{label}</LabelText>
        <WithIconWrapper
          isHovered={isHovered}
          hasError={!!helperText}
          iconPosition={iconPosition}
        >
          {icon && icon}
          <SFormInput
            ref={hoverRef}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            iconPosition={iconPosition}
            {...props}
          />
        </WithIconWrapper>
      </Label>
      {helperText && <HelperText>{helperText}</HelperText>}
    </TextInputWrapper>
  );
});

export default Input;
