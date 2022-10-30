import { FC, memo, useCallback } from "react";
import Textarea from "@/ui-kit/components/inputs/textarea/textarea";

import { Column } from "@/global.css";


const IgnoreLinks: FC = memo((): JSX.Element => {
  const onChangeInputHandler = useCallback(
    () => console.log("change"),
    []
  );

  return (
    <Column width={"100%"}>
      <Textarea
        onChange={onChangeInputHandler}
        placeholder={"e.g. https://upsidelab.io/product-1\n" +
          "     https://upsidelab.io/product-2\n" +
          "     https://upsidelab.io/product-3"}
        full
      />
    </Column>
  )
});

export default IgnoreLinks;