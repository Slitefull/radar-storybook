import { FC, memo, useCallback } from "react";
import Input from "@/ui-kit/components/inputs/text/text";
import CloseIcon from "@/ui-kit/customized-icons/close/close";
import Label from "@/ui-kit/components/label/label";

import { Column } from "@/global.css";


interface HTTPHeaderProps {
  index: number;
  onDelete: (index: number) => void;
}

const HTTPHeader: FC<HTTPHeaderProps> = memo(({ index, onDelete }): JSX.Element => {
  const onChangeInputHandler = useCallback(
    () => console.log("change"),
    []
  );

  return (
    <Column width={"50%"}>
      <Column width={"100%"}>
        <Input
          label={"Header name"}
          labelColor={"ghost"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
        <Input
          label={"Header value"}
          labelColor={"ghost"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
      </Column>
      <Label onClick={() => onDelete(index)}><CloseIcon/> Remove</Label>
    </Column>
  )
});

export default HTTPHeader;
