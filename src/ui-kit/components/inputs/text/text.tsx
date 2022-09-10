import { ChangeEvent, FC, InputHTMLAttributes, memo, ReactNode, } from "react";
import useHover from "@/ui-kit/hooks/useHover";

import { HelperText, SFormInput, TextInputWrapper, WithIconWrapper } from "./styled";


type IconPosition = "start" | "end";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
}

const Input: FC<TextInputProps> = memo((
  {
    onChange,
    helperText,
    placeholder,
    disabled,
    icon,
    iconPosition,
    ...props
  }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLInputElement>();

  return (
    <TextInputWrapper disabled={disabled}>
      <WithIconWrapper
        isHovered={isHovered}
        hasError={!!helperText}
        iconPosition={iconPosition}
      >
        {icon && icon}
        <SFormInput
          ref={hoverRef}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </WithIconWrapper>
      {helperText && <HelperText>{helperText}</HelperText>}
    </TextInputWrapper>
  );
});

export default Input;
