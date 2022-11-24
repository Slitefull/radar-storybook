import { FC } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";
import { useNavigation } from "react-day-picker";


const IconRight: FC = (): JSX.Element => {
  const { goToMonth, nextMonth } = useNavigation();

  return (
    <ArrowIcon
      disabled={!nextMonth}
      onClick={() => nextMonth && goToMonth(nextMonth)}
      rotation={"right"}
      color={PLUMP_PURPLE}
      size={10}
    />
  );
};

export default IconRight;
