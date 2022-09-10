import { components, MultiValueRemoveProps } from "react-select";
import CloseIcon from "@/ui-kit/customized-icons/close/close";

type Option = { value: string | number, label: string | number }

const MultiValueRemove = (props: MultiValueRemoveProps<Option>) => {
  return (
    <components.MultiValueRemove {...props}>
      <CloseIcon size={10}/>
    </components.MultiValueRemove>
  );
};

export default MultiValueRemove;
