import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo, ReactNode, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { LinkColor, LinkSize } from "./types";
import { SLink, WithIconWrapper } from "./styled";


type DefaultLinkProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface LinkProps extends DefaultLinkProps {
  redirectTo: string;
  color?: LinkColor;
  size?: LinkSize;
  icon?: ReactNode;
  children: ReactNode;
}

const Link: FC<LinkProps> = memo((
  {
    children,
    redirectTo,
    color,
    size,
    icon,
  }
): JSX.Element => {
  const navigate = useNavigate();

  const onRedirectHandler = useCallback(
    () => navigate(redirectTo),
    [navigate, redirectTo]
  );

  return (
    <WithIconWrapper
      color={color}
      onClick={onRedirectHandler}
    >
      {icon}
      <SLink
        color={color}
        size={size}
      >
        {children}
      </SLink>
    </WithIconWrapper>
  );
});

export default Link;
