import { FC } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";
import { useNavigation } from "react-day-picker";


const IconLeft: FC = (): JSX.Element => {
  const { goToMonth, previousMonth } = useNavigation();

  return (
    <ArrowIcon
      disabled={!previousMonth}
      onClick={() => previousMonth && goToMonth(previousMonth)}
      rotation={"left"}
      color={PRIMARY_60}
      size={7}
    />
  );
};

export default IconLeft;
