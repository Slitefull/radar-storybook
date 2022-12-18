import { FC, memo } from 'react';
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import faker from "faker";
import Text from "@/ui-kit/components/typography/text";
import Rank from "@/ui-kit/components/typography/rank";

import { Row } from "@/global.css";


const TotalChanges: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Row gap={10} align={"center"}>
      <Text type={"secondary"}>
        {capitalizeFirstLetter(t("total_changes"))}:
      </Text>
      <Text
        type={"secondary"}
        size={"xl"}
        weight={"bold"}
      >
        {faker.datatype.number({ min: 1, max: 1000 })}
      </Text>
      <Rank
        number={faker.datatype.number({ min: 1, max: 100 })}
        isPositive={faker.datatype.boolean()}
      />
    </Row>
  );
});

export default TotalChanges;