import { FC, memo, useCallback } from "react";
import { EBONY } from "@/ui-kit/constants/colors";
import Input from "@/ui-kit/components/inputs/text/text";
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types/with-types";
import Label from "@/ui-kit/components/label/label";
import CloseIcon from "@/ui-kit/customized-icons/close/close";

import { Column, Row } from "@/global.css";


interface IgnoreCertainProps {
  index: number;
  onDelete: (index: number) => void;
}

const IgnoreCertain: FC<IgnoreCertainProps> = memo(({ index, onDelete }): JSX.Element => {
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
    <Column width={"100%"} margin={"0 0 20px"} align={"end"}>
      <DropdownWithTypes
        label={"Notification"}
        labelPosition={"top"}
        labelWeight={"bold"}
        labelColor={EBONY}
        options={userAgentOptions}
        width={"100%"}
      />
      <Row width={"100%"} align={"center"}>
        <DropdownWithTypes
          options={userAgentOptions}
          width={"25%"}
        />
        <Input
          onChange={onChangeInputHandler}
          placeholder={"URL pattern"}
          width={"75%"}
          full
        />
      </Row>

      <Label onClick={() => onDelete(index)} weight={"bold"}><CloseIcon/> Remove</Label>
    </Column>
  )
});

export default IgnoreCertain;