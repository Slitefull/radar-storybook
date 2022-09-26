import { FC } from "react";
import { format } from "date-fns";
import { CaptionProps, useNavigation } from 'react-day-picker';
import ArrowIcon from "@/ui-kit/customized-icons/arrow/arrow";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { CaptionWrapper, DateDisplay } from "../../styled";


const Caption: FC<CaptionProps> = ({ displayMonth }): JSX.Element => {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  return (
    <CaptionWrapper>
      <ArrowIcon
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
        rotation={"left"}
        color={PLUMP_PURPLE}
        size={10}
      />
      <DateDisplay>
        {format(displayMonth, 'MMMM')}
      </DateDisplay>
      <ArrowIcon
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
        rotation={"right"}
        color={PLUMP_PURPLE}
        size={10}
      />
    </CaptionWrapper>
  );
}

export default Caption;
