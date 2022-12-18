import { FC, memo, useCallback } from "react";
import { NEUTRAL_70 } from "@/ui-kit/constants/colors";
import Input from "@/ui-kit/components/controls/text";
import CloseIcon from "@/ui-kit/customized-icons/close";
import Label from "@/ui-kit/components/typography/label";

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
    <Column width={"50%"} align={"end"}>
      <Column width={"100%"}>
        <Input
          label={"Header name"}
          labelColor={NEUTRAL_70}
          labelWeight={"bold"}
          onChange={onChangeInputHandler}
          placeholder={"e.g. lorem ipsum"}
          width={"100%"}
          full
        />
        <Input
          label={"Header value"}
          labelColor={NEUTRAL_70}
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

export default HTTPHeader;
