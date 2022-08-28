import { FC, memo, ReactNode } from 'react';

import { StyledWithBackgroundText } from "./styled";


interface WithBackgroundTextProps {
  background?: Color;
  color?: Color;
  rounded?: boolean;
  children: ReactNode;
}

const WithBackgroundText: FC<WithBackgroundTextProps> = memo((
  {
    children,
    background,
    color,
    rounded,
  }
): JSX.Element => {
  return (
    <StyledWithBackgroundText
      background={background}
      color={color}
      rounded={rounded}
    >
      {children}
    </StyledWithBackgroundText>
  );
});

export default WithBackgroundText;
