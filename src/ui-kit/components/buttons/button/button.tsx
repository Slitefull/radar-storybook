import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo, ReactNode } from 'react';
import { ButtonColors, ButtonSizes } from "./types";

import { SButton } from "./styled";


type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface ButtonProps extends DefaultButtonProps {
  color?: ButtonColors;
  size?: ButtonSizes;
  children: ReactNode;
}

const Button: FC<ButtonProps> = memo((
  {
    color,
    size,
    children,
  }
): JSX.Element => {
  return (
    <SButton
      color={color}
      size={size}
    >
      {children}
    </SButton>
  );
});

export default Button;
