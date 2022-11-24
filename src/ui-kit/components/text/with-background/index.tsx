import { FC, memo, ReactNode } from "react";

import { SWithBackgroundText } from "./styled";


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
    <SWithBackgroundText
      background={background}
      color={color}
      rounded={rounded}
    >
      {children}
    </SWithBackgroundText>
  );
});

export default WithBackgroundText;
