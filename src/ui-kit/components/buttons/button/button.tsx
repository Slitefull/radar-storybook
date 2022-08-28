import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo, ReactNode } from 'react';
import { ButtonColors, ButtonSizes } from "./types";

import { StyledButton } from "./styled";


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
    <StyledButton
      color={color}
      size={size}
    >
      {children}
    </StyledButton>
  );
});

export default Button;
