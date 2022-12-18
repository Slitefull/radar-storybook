import { FC } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";


const DropdownIndicator: FC = ({ selectProps }: any): JSX.Element => {
  const { menuIsOpen } = selectProps;
  return (
    <ArrowIcon
      size={7}
      rotation={menuIsOpen ? "top" : "bottom"}
      color={PRIMARY_60}
    />
  );
};

export default DropdownIndicator;
