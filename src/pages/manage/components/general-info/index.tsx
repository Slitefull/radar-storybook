import { FC, memo } from 'react';
import { useTranslation } from "react-i18next";
import { BLACK_SHADOWS, RAISIN_BLACK } from "@/ui-kit/constants/colors";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import ColoredText from "@/ui-kit/components/text/colored";
import LineSeparator from "@/ui-kit/components/separators/line";
import Label from "@/ui-kit/components/label";

import { Column, Row } from "@/global.css";


const GeneralInfo: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Column margin={"0 0 40px"}>
      <Row gap={5} align={"center"}>
        <ColoredText
          type={"secondary"}
          color={RAISIN_BLACK}
        >
          {capitalizeFirstLetter(t("crawl_credits_used_this_month"))}:
        </ColoredText>
        <ColoredText
          type={"secondary"}
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
        <Label weight={"bold"}>
          {capitalizeFirstLetter(t("account_settings"))}
        </Label>
      </Row>

      <Row gap={5}>
        <ColoredText
          type={"secondary"}
          color={RAISIN_BLACK}
        >
          {capitalizeFirstLetter(t("remaining_crawl_credits"))}:
        </ColoredText>
        <ColoredText
          type={"secondary"}
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
          {capitalizeFirstLetter(t("remaining_change_analysis_credits"))}:
        </ColoredText>
        <ColoredText
          type={"secondary"}
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