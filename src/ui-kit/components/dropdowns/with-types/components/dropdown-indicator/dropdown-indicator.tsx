import { FC } from 'react';
import ArrowIcon from "@/ui-kit/customized-icons/arrow/arrow";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";


const DropdownIndicator: FC = ({ selectProps }: any): JSX.Element => {
  const { menuIsOpen } = selectProps;
  return (
    <ArrowIcon
      size={12}
      rotation={menuIsOpen ? "top" : "bottom"}
      color={PLUMP_PURPLE}
    />
  );
};

export default DropdownIndicator;
