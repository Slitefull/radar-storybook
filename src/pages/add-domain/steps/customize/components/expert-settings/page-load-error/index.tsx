import { FC, memo, useCallback } from 'react';
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types/with-types";
import Input from "@/ui-kit/components/inputs/text/text";

import { Row } from '@/global.css';


const PageLoadError:FC = memo(() => {
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
    <Row width={"100%"} align={"end"}>
      <DropdownWithTypes
        label={"Load error type"}
        labelPosition={"top"}
        labelColor={"ghost"}
        subtitleColor={"secondary"}
        options={userAgentOptions}
        width={"25%"}
      />
      <DropdownWithTypes
        labelPosition={"top"}
        labelColor={"ghost"}
        subtitleColor={"secondary"}
        options={userAgentOptions}
        width={"15%"}
      />
      <Input
        onChange={onChangeInputHandler}
        width={"60%"}
        full
      />
    </Row>
  );
});

export default PageLoadError;