import { ChangeEvent, FC, InputHTMLAttributes, lazy, memo, } from "react";

import { HelperText, StyledFormInput, TextInputWrapper, WithIconWrapper } from "./styled";


const SearchIcon = lazy(() => import("../../../customized-icons/search/search"));

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  placeholder?: string;
  withIcon?: boolean;
}

const Input: FC<TextInputProps> = memo((
  {
    onChange,
    helperText,
    placeholder,
    withIcon,
    ...props
  }): JSX.Element => {
  return (
    <TextInputWrapper>
      <WithIconWrapper>
        <StyledFormInput
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        {withIcon && <SearchIcon size={15}/>}
      </WithIconWrapper>
      {helperText && <HelperText>{helperText}</HelperText>}
    </TextInputWrapper>
  );
});

export default Input;
