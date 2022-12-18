import { FC, memo, useCallback } from 'react';
import CloseIcon from "@/ui-kit/customized-icons/close";
import Label from "@/ui-kit/components/typography/label";
import Input from "@/ui-kit/components/controls/text";
import Textarea from "@/ui-kit/components/controls/textarea";
import Text from "@/ui-kit/components/typography/text";

import { Column } from '@/global.css';
import { NEUTRAL_90 } from "@/ui-kit/constants/colors";


interface PageTypeProps {
  index: number;
  onDelete: (index: number) => void;
}

const PageType: FC<PageTypeProps> = memo(({ index, onDelete }): JSX.Element => {
  const onChangeProductPagesInputHandler = useCallback(
    () => console.log("change"),
    [],
  );

  const onChangeProductPagesTextareaHandler = useCallback(
    () => () => console.log("change"),
    [],
  );

  const onChangeListingPagesInputHandler = useCallback(
    () => () => console.log("change"),
    [],
  );

  const onChangeListingPagesTextareaHandler = useCallback(
    () => () => console.log("change"),
    [],
  );

  const onChangeContentLandingPagesInputHandler = useCallback(
    () => () => console.log("change"),
    [],
  );

  const onChangeContentLandingPagesTextareaHandler = useCallback(
    () => () => console.log("change"),
    [],
  );

  return (
    <Column
      width={"550px"}
      margin={"auto"}
      gap={40}
    >
      <Column
        align={"baseline"}
        margin={"0"}
      >
        <Text
          type={"primary"}
          weight={"bold"}
          size={"big"}
        >
          Homepage
        </Text>
        <Text
          type={"secondary"}
          color={NEUTRAL_90}
        >
          https://upsidelab.io
        </Text>
      </Column>

      <Column width={"100%"}>
        <Input
          onChange={onChangeProductPagesInputHandler}
          placeholder={"e.g. Product pages"}
          full
        />
        <Textarea
          onChange={onChangeProductPagesTextareaHandler}
          bottomText={"Please provide at least 3 representative links"}
          placeholder={"e.g. https://upsidelab.io/product-1\n" +
            "     https://upsidelab.io/product-2\n" +
            "     https://upsidelab.io/product-3"
          }
          full
        />
      </Column>

      <Column width={"100%"}>
        <Input
          onChange={onChangeListingPagesInputHandler}
          placeholder={"e.g. Listing pages"}
          full
        />
        <Textarea
          onChange={onChangeListingPagesTextareaHandler}
          bottomText={"Please provide at least 3 representative links"}
          placeholder={"e.g. https://upsidelab.io/listing-1\n" +
            "     https://upsidelab.io/listing-2\n" +
            "     https://upsidelab.io/listing-3"
          }
          full
        />
      </Column>

      <Column width={"100%"}>
        <Input
          onChange={onChangeContentLandingPagesInputHandler}
          placeholder={"e.g. Content landing pages"}
          full
        />
        <Textarea
          onChange={onChangeContentLandingPagesTextareaHandler}
          bottomText={"Please provide at least 3 representative links"}
          placeholder={"e.g. https://upsidelab.io/about\n" +
            "     https://upsidelab.io/careers\n" +
            "     https://upsidelab.io/contact"
          }
          full
        />
      </Column>

      {index !== 0 && <Label onClick={() => onDelete(index)}><CloseIcon/> Remove</Label>}
    </Column>
  );
});

export default PageType;