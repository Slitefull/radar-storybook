import { FC, memo, useCallback } from "react";
import Input from "@/ui-kit/components/inputs/text/text";
import Label from "@/ui-kit/components/label/label";
import CloseIcon from "@/ui-kit/customized-icons/close/close";

import { Column } from "@/global.css";


interface CustomCookieProps {
  index: number;
  onDelete: (index: number) => void;
}

const CustomCookie: FC<CustomCookieProps> = memo(({ index, onDelete }): JSX.Element => {
  const onChangeInputHandler = useCallback(
    () => console.log("change"),
    [],
  );

  return (
    <Column width={"50%"}>
      <Column width={"100%"}>
        <Input
          label={"Display name"}
          labelColor={"ghost"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
        <Input
          label={"Cookie name"}
          labelColor={"ghost"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
        <Input
          label={"Value"}
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

export default CustomCookie;
