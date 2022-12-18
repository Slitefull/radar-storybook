import { FC, memo, useCallback } from "react";
import { NEUTRAL_70 } from "@/ui-kit/constants/colors";
import Input from "@/ui-kit/components/controls/text";
import DropdownWithTypes from "@/ui-kit/components/controls/with-types";
import CloseIcon from "@/ui-kit/customized-icons/close";
import Label from "@/ui-kit/components/typography/label";

import { Column, Row } from "@/global.css";


interface ExcludeCertainProps {
  index: number;
  onDelete: (index: number) => void;
}

const ExcludeCertain: FC<ExcludeCertainProps> = memo(({ index, onDelete }): JSX.Element => {
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
      margin={"0 0 20px"}
      align={"end"}
      gap={0}
    >
      <Column width={"100%"}>
        <Row width={"100%"}>
          <Input
            label={"XPath"}
            labelColor={NEUTRAL_70}
            labelWeight={"bold"}
            onChange={onChangeInputHandler}
            placeholder={"e.g /content/blog"}
            width={"75%"}
            full
          />
          <DropdownWithTypes
            label={"User agent"}
            labelPosition={"top"}
            labelWeight={"bold"}
            labelColor={NEUTRAL_70}
            options={userAgentOptions}
            width={"25%"}
          />
        </Row>
        <Input
          onChange={onChangeInputHandler}
          placeholder={"e.g. https://example.io/path"}
          width={"100%"}
          full
        />
      </Column>
      <Label onClick={() => onDelete(index)} weight={"bold"}><CloseIcon/> Remove</Label>
    </Column>
  )
});

export default ExcludeCertain;