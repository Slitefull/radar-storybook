import { FC, memo, useCallback } from "react";
import Textarea from "@/ui-kit/components/inputs/textarea/textarea";
import Label from "@/ui-kit/components/label/label";
import CloseIcon from "@/ui-kit/customized-icons/close/close";

import { Column } from "@/global.css";


interface IgnoreLinksProps {
  index: number;
  onDelete: (index: number) => void;
}

const IgnoreLinks: FC<IgnoreLinksProps> = memo(({ index, onDelete }): JSX.Element => {
  const onChangeInputHandler = useCallback(
    () => console.log("change"),
    []
  );

  return (
    <Column width={"100%"} margin={"0 0 20px"} align={"end"}>
      <Textarea
        onChange={onChangeInputHandler}
        placeholder={"e.g. https://upsidelab.io/product-1\n" +
          "     https://upsidelab.io/product-2\n" +
          "     https://upsidelab.io/product-3"}
        full
      />

      <Label onClick={() => onDelete(index)} weight={"bold"}><CloseIcon/> Remove</Label>
    </Column>
  )
});

export default IgnoreLinks;