import { FC, Fragment, memo, ReactNode } from "react";
import Question from "@/ui-kit/customized-icons/question/question";

import { IconWrapper, TBox, TCard } from "./styled";


interface TooltipProps {
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = memo(({ children }): JSX.Element => {
  return (
    <Fragment>
      <TCard>
        <IconWrapper>
          <Question size={24}/>
        </IconWrapper>
        <TBox>
          {children}
        </TBox>
      </TCard>
    </Fragment>
  );
});

export default Tooltip;
