import { FC, memo, ReactNode } from "react";
import Question from "@/ui-kit/customized-icons/question";

import { IconWrapper, TBox, TCard } from "./styled";


interface TooltipProps {
  children: ReactNode;
  color?: Color;
}

const Tooltip: FC<TooltipProps> = memo(({ children, color }): JSX.Element => {
  return (
    <TCard>
      <IconWrapper>
        <Question size={24}/>
      </IconWrapper>
      <TBox>
        {children}
      </TBox>
    </TCard>
  );
});

export default Tooltip;
