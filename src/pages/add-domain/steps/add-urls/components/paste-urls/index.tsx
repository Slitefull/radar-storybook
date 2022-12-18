import { FC, memo, useCallback } from 'react';
import { NEUTRAL_90 } from "@/ui-kit/constants/colors";
import RoundedBanner from "@/ui-kit/components/banners/rounded";
import Textarea from "@/ui-kit/components/controls/textarea";
import Text from "@/ui-kit/components/typography/text";
import Checkbox from "@/ui-kit/components/controls/checkbox";

import { Column } from '@/global.css';


const PasteUrls: FC = memo((): JSX.Element => {
  const onChangeHandler = useCallback(
    () => () => console.log("change"),
    [],
  );

  return (
    <Column width={"85%"}>
      <Text
        color={NEUTRAL_90}
        weight={"bold"}
      >
        Type in or copy/paste website URLs one per row
      </Text>

      <RoundedBanner>
        In order to ensure the best performance of SEO radar, please provide at least 1 representative link of your
        website, broken down into specific page types dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <strong>(minimum 20)</strong>
      </RoundedBanner>

      <Textarea
        onChange={onChangeHandler}
        bottomText={"Please provide at least 3 representative links"}
        placeholder={"e.g. www.example.com/directory-path-1\n" +
          "     www.example.com/directory-path-2\n" +
          "     www.example.com/directory-path-3\n" +
          "     ."}
        full
      />

      <Checkbox
        checked={false}
        label={"Allow inaccessible URLs"}
        labelSize={"small"}
        labelColor={NEUTRAL_90}
        labelPosition={"right"}
      />
    </Column>
  );
});

export default PasteUrls;