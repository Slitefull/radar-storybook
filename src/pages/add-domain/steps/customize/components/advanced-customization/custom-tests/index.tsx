import { FC, memo, useCallback } from "react";
import { NEUTRAL_70 } from "@/ui-kit/constants/colors";
import Input from "@/ui-kit/components/controls/text";
import DropdownWithTypes from "@/ui-kit/components/controls/with-types";
import Textarea from "@/ui-kit/components/controls/textarea";
import CloseIcon from "@/ui-kit/customized-icons/close";
import Label from "@/ui-kit/components/typography/label";

import { Column, Row } from "@/global.css";


interface CustomTestsProps {
  index: number;
  onDelete: (index: number) => void;
}

const CustomTests: FC<CustomTestsProps> = memo(({ index, onDelete }): JSX.Element => {
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
      <Input
        label={"Test display name"}
        labelColor={NEUTRAL_70}
        onChange={onChangeInputHandler}
        placeholder={"Lorem ipsum"}
        labelWeight={"bold"}
        width={"100%"}
        full
      />
      <Textarea
        label={"String"}
        labelWeight={"bold"}
        labelColor={NEUTRAL_70}
        onChange={onChangeInputHandler}
        placeholder={"Lorem ipsum"}
        full
      />
      <DropdownWithTypes
        label={"Treat String As"}
        labelPosition={"top"}
        labelWeight={"bold"}
        labelColor={NEUTRAL_70}
        options={userAgentOptions}
        width={"100%"}
      />
      <Row width={"100%"} align={"center"} justify={"space-between"}>
        <DropdownWithTypes
          options={userAgentOptions}
          width={"20%"}
        />
        <Input
          onChange={onChangeInputHandler}
          placeholder={"URL pattern"}
          width={"80%"}
          full
        />
      </Row>

      <Label onClick={() => onDelete(index)} weight={"bold"}><CloseIcon/> Remove</Label>
    </Column>
  )
});

export default CustomTests;