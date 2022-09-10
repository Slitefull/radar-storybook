import { ChangeEvent, FC, memo, TextareaHTMLAttributes, } from "react";
import useHover from "@/ui-kit/hooks/useHover";

import { HelperText, STextarea, TextareaWrapper } from "./styled";


export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Textarea: FC<TextareaProps> = memo((
  {
    onChange,
    helperText,
    placeholder,
    disabled,
    ...props
  }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLTextAreaElement>();

  return (
    <TextareaWrapper disabled={disabled}>
      <STextarea
        ref={hoverRef}
        onChange={onChange}
        placeholder={placeholder}
        isHovered={isHovered}
        hasError={!!helperText}
        {...props}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
    </TextareaWrapper>
  );
});

export default Textarea;
