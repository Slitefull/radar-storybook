import { FC, memo, useCallback } from 'react';
import { DARK_LAVA } from "@/ui-kit/constants/colors";
import RoundedBanner from "@/ui-kit/components/banners/rounded";
import Textarea from "@/ui-kit/components/inputs/textarea/textarea";
import ColoredText from "@/ui-kit/components/text/colored/colored";
import Checkbox from "@/ui-kit/components/inputs/checkbox/checkbox";

import { Column } from '@/global.css';


const PasteUrls: FC = memo((): JSX.Element => {
  const onChangeHandler = useCallback(
    () => () => console.log("change"),
    [],
  );

  return (
    <Column width={"85%"}>
      <ColoredText
        color={DARK_LAVA}
        weight={"bold"}
      >
        Type in or copy/paste website URLs one per row
      </ColoredText>

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
        labelColor={DARK_LAVA}
        labelPosition={"right"}
      />
    </Column>
  );
});

export default PasteUrls;