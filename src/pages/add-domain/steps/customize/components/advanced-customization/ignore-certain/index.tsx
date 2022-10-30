import { FC, memo, useCallback } from "react";
import Input from "@/ui-kit/components/inputs/text/text";
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types/with-types";

import { Column, Row } from "@/global.css";


const IgnoreCertain: FC = memo((): JSX.Element => {
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
    <Column width={"100%"}>
      <DropdownWithTypes
        label={"Notification"}
        labelPosition={"top"}
        labelColor={"ghost"}
        subtitleColor={"secondary"}
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
    </Column>
  )
});

export default IgnoreCertain;