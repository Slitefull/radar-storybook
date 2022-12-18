import { FC } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";
import { useNavigation } from "react-day-picker";


const IconRight: FC = (): JSX.Element => {
  const { goToMonth, nextMonth } = useNavigation();

  return (
    <ArrowIcon
      disabled={!nextMonth}
      onClick={() => nextMonth && goToMonth(nextMonth)}
      rotation={"right"}
      color={PRIMARY_60}
      size={7}
    />
  );
};

export default IconRight;
