import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo, ReactNode } from 'react';

import { LinkSize } from "./types";
import { SLink, WithIconWrapper } from "./styled";


type DefaultLinkProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

//TODO add hover
//TODO add other colors
interface LinkProps extends DefaultLinkProps {
  onClick: VoidFunction;
  size?: LinkSize;
  icon?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
}

const ButtonLink: FC<LinkProps> = memo((
  {
    onClick,
    children,
    size,
    icon,
    disabled,
  }
): JSX.Element => {
  return (
    <WithIconWrapper
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <SLink
        size={size}
        disabled={disabled}
      >
        {children}
      </SLink>
    </WithIconWrapper>
  );
});

export default ButtonLink;
