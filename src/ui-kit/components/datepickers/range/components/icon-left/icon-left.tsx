import { FC } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow/arrow";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";
import { useNavigation } from "react-day-picker";


const IconLeft: FC = (): JSX.Element => {
  const { goToMonth, previousMonth } = useNavigation();

  return (
    <ArrowIcon
      disabled={!previousMonth}
      onClick={() => previousMonth && goToMonth(previousMonth)}
      rotation={"left"}
      color={PLUMP_PURPLE}
      size={10}
    />
  );
};

export default IconLeft;
