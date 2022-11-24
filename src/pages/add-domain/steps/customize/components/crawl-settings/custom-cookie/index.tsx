import { FC, memo, useCallback } from "react";
import Input from "@/ui-kit/components/inputs/text";
import Label from "@/ui-kit/components/label";
import CloseIcon from "@/ui-kit/customized-icons/close";

import { Column } from "@/global.css";
import { EBONY } from "@/ui-kit/constants/colors";


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
    <Column width={"50%"} align={"end"}>
      <Column width={"100%"}>
        <Input
          label={"Display name"}
          labelColor={EBONY}
          labelWeight={"bold"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
        <Input
          label={"Cookie name"}
          labelColor={EBONY}
          labelWeight={"bold"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
        <Input
          label={"Value"}
          labelColor={EBONY}
          labelWeight={"bold"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
      </Column>
      <Label onClick={() => onDelete(index)} weight={"bold"}><CloseIcon/> Remove</Label>
    </Column>
  )
});

export default CustomCookie;
