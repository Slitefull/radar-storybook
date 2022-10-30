import { FC, memo, useCallback } from "react";
import Input from "@/ui-kit/components/inputs/text/text";
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types/with-types";
import Textarea from "@/ui-kit/components/inputs/textarea/textarea";

import { Column, Row } from "@/global.css";


const CustomTests: FC = memo((): JSX.Element => {
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
      <Input
        label={"Test display name"}
        labelColor={"ghost"}
        onChange={onChangeInputHandler}
        placeholder={"Lorem ipsum"}
        width={"100%"}
        full
      />
      <Textarea
        label={"String"}
        labelColor={"ghost"}
        onChange={onChangeInputHandler}
        placeholder={"Lorem ipsum"}
        full
      />
      <DropdownWithTypes
        label={"Treat String As"}
        labelPosition={"top"}
        labelColor={"ghost"}
        subtitleColor={"secondary"}
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
    </Column>
  )
});

export default CustomTests;