import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo, ReactNode } from "react";
import { ButtonColors, ButtonSizes } from "./types";

import { SButton } from "./styled";


type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface ButtonProps extends DefaultButtonProps {
  color?: ButtonColors;
  size?: ButtonSizes;
  children: ReactNode;
  rounded?: boolean;
  onClick?: VoidFunction;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = memo((
  {
    color = "primary",
    size = "default",
    rounded = false,
    onClick,
    disabled,
    children,
  }
): JSX.Element => {
  return (
    <SButton
      color={color}
      size={size}
      rounded={rounded}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </SButton>
  );
});

export default Button;
