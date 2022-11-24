import { FC, memo, useCallback } from 'react';
import { EBONY } from "@/ui-kit/constants/colors";
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types";
import Input from "@/ui-kit/components/inputs/text";
import CloseIcon from "@/ui-kit/customized-icons/close";
import Label from "@/ui-kit/components/label";

import { Column, Row } from '@/global.css';


interface PageLoadErrorProps {
  index: number;
  onDelete: (index: number) => void;
}

const PageLoadError: FC<PageLoadErrorProps> = memo(({ index, onDelete }) => {
  const userAgentOptions = [
    { value: "my_domain", label: "12AM - 6AM | Mon - Fri" },
    { value: "my_domain_2", label: "12AM - 6AM | Mon, Wed, Fri" },
    { value: "my_domain_3", label: "12AM - 6AM | Thu" },
    { value: "custom", label: "Custom" },
  ];

  const onChangeInputHandler = useCallback(
    () => console.log("change"),
    []
  );

  return (
    <Column
      width={"100%"}
      align={"end"}
    >
      <Row width={"100%"} align={"end"}>
        <DropdownWithTypes
          label={"Load error type"}
          labelPosition={"top"}
          labelWeight={"bold"}
          labelColor={EBONY}
          options={userAgentOptions}
          width={"25%"}
        />
        <DropdownWithTypes
          options={userAgentOptions}
          width={"15%"}
        />
        <Input
          onChange={onChangeInputHandler}
          width={"60%"}
          full
        />
      </Row>
      <Label onClick={() => onDelete(index)} weight={"bold"}><CloseIcon/> Remove</Label>
    </Column>
  );
});

export default PageLoadError;