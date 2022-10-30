import { FC, useRef } from "react";
import { DayProps, useDayRender } from "react-day-picker";

import { DayButton } from "../../styled";


const Day: FC<DayProps> = ({ date, displayMonth }): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(date, displayMonth, buttonRef);

  if (dayRender.isHidden) {
    return <></>;
  }

  if (!dayRender.isButton) {
    return <div {...dayRender.divProps} />;
  }

  return (
    <DayButton
      {...dayRender.buttonProps}
      ref={buttonRef}
      onClick={(e) => dayRender.buttonProps?.onClick?.(e)}
    />
  );
}

export default Day;
