import { FC, memo, ReactNode } from "react";

import { SLabel } from "./styled";


type LabelColors = "primary" | "ghost" | "subtly";

interface CheckboxProps {
  color?: LabelColors;
  children: ReactNode;
}

const Label: FC<CheckboxProps> = memo((
  {
    children,
    color = "primary"
  }
): JSX.Element => {
  return (
    <SLabel color={color}>
      {children}
    </SLabel>
  )
})

export default Label;
