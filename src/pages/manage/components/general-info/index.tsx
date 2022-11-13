import { FC, memo } from 'react';
import { BLACK_SHADOWS, RAISIN_BLACK } from "@/ui-kit/constants/colors";
import ColoredText from "@/ui-kit/components/text/colored/colored";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import Label from "@/ui-kit/components/label/label";

import { Column, Row } from "@/global.css";


const GeneralInfo: FC = memo((): JSX.Element => {
  return (
    <Column margin={"0 0 40px"}>
      <Row gap={5} align={"center"}>
        <ColoredText
          type={"secondary"}
          color={RAISIN_BLACK}
        >
          Crawl credits used this month:
        </ColoredText>
        <ColoredText
          color={RAISIN_BLACK}
          weight={"bold"}
        >
          18
        </ColoredText>
        <LineSeparator
          type={"vertical"}
          variant={"dashed"}
          width={"20px"}
          color={BLACK_SHADOWS}
        />
        <Label weight={"bold"}>Account settings</Label>
      </Row>

      <Row gap={5}>
        <ColoredText
          type={"secondary"}
          color={RAISIN_BLACK}
        >
          Remaining crawl credits:
        </ColoredText>
        <ColoredText
          color={RAISIN_BLACK}
          weight={"bold"}
        >
          18
        </ColoredText>
      </Row>

      <Row gap={5}>
        <ColoredText
          type={"secondary"}
          color={RAISIN_BLACK}
        >
          Remaining change analysis credits:
        </ColoredText>
        <ColoredText
          color={RAISIN_BLACK}
          weight={"bold"}
        >
          18
        </ColoredText>
      </Row>
    </Column>
  );
});

export default GeneralInfo;