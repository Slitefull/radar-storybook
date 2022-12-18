import { FC } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow";


const DropdownIndicator: FC = ({ selectProps }: any): JSX.Element => {
  const { menuIsOpen } = selectProps;

  return (
    <ArrowIcon
      size={7}
      rotation={menuIsOpen ? "top" : "bottom"}
    />
  );
};

export default DropdownIndicator;
