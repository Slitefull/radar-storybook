import { FC, memo, useCallback } from "react";
import Input from "@/ui-kit/components/inputs/text/text";
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types/with-types";

import { Column, Row } from "@/global.css";


const ExcludeCertain: FC = memo((): JSX.Element => {
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
      <Row width={"100%"}>
        <Input
          label={"XPath"}
          labelColor={"ghost"}
          onChange={onChangeInputHandler}
          placeholder={"e.g /content/blog"}
          width={"75%"}
          full
        />
        <DropdownWithTypes
          label={"User agent"}
          labelPosition={"top"}
          labelColor={"ghost"}
          subtitleColor={"secondary"}
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
  )
});

export default ExcludeCertain;