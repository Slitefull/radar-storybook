import { FC, memo } from 'react';
import { useTranslation } from "react-i18next";
import { NEUTRAL_40, NEUTRAL_100 } from "@/ui-kit/constants/colors";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Text from "@/ui-kit/components/typography/text";
import LineSeparator from "@/ui-kit/components/separators/line";
import Label from "@/ui-kit/components/typography/label";

import { Column, Row } from "@/global.css";


const GeneralInfo: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Column margin={"0 0 40px"}>
      <Row gap={5} align={"center"}>
        <Text
          type={"secondary"}
          color={NEUTRAL_100}
        >
          {capitalizeFirstLetter(t("crawl_credits_used_this_month"))}:
        </Text>
        <Text
          type={"secondary"}
          color={NEUTRAL_100}
          weight={"bold"}
        >
          18
        </Text>
        <LineSeparator
          type={"vertical"}
          variant={"dashed"}
          width={"20px"}
          color={NEUTRAL_40}
        />
        <Label weight={"bold"}>
          {capitalizeFirstLetter(t("account_settings"))}
        </Label>
      </Row>

      <Row gap={5}>
        <Text
          type={"secondary"}
          color={NEUTRAL_100}
        >
          {capitalizeFirstLetter(t("remaining_crawl_credits"))}:
        </Text>
        <Text
          type={"secondary"}
          color={NEUTRAL_100}
          weight={"bold"}
        >
          18
        </Text>
      </Row>

      <Row gap={5}>
        <Text
          type={"secondary"}
          color={NEUTRAL_100}
        >
          {capitalizeFirstLetter(t("remaining_change_analysis_credits"))}:
        </Text>
        <Text
          type={"secondary"}
          color={NEUTRAL_100}
          weight={"bold"}
        >
          18
        </Text>
      </Row>
    </Column>
  );
});

export default GeneralInfo;