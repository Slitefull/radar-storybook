import { FC } from "react";
import { format } from "date-fns";
import { CaptionProps } from "react-day-picker";

import { CaptionWrapper, DateDisplay } from "../../styled";


const CaptionLabel: FC<CaptionProps> = ({ displayMonth }): JSX.Element => {
  return (
    <CaptionWrapper>
      <DateDisplay>
        {format(displayMonth, "MMMM")}
      </DateDisplay>
    </CaptionWrapper>
  );
}

export default CaptionLabel;
