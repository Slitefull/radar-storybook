import { FC } from "react";
import { Controller } from "react-hook-form";
import Input, { TextInputProps } from "@/ui-kit/components/inputs/text";


interface FormsTextInputProps
  extends Omit<TextInputProps, "onChange" | "value"> {
  name: `${string}`;
  error?: string;
  control?: any;
}

const FormsTextInput: FC<FormsTextInputProps> = (
  {
    name,
    error,
    control,
    helperText,
    ...props
  }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...rest } }) => (
        <Input
          helperText={error}
          {...props}
          {...rest}
        />
      )}
    />
  );
};

export default FormsTextInput;
