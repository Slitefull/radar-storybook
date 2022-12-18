import { FC, memo, } from "react";
import { SUPPORT_4_50, SUPPORT_2_50 } from "@/ui-kit/constants/colors";
import RankIcon from "@/ui-kit/customized-icons/rank";
import Text from "@/ui-kit/components/typography/text";

import { Row } from "@/global.css";


export interface RankProps {
  number: number;
  isPositive: boolean;
}

const Rank: FC<RankProps> = memo((
  {
    number,
    isPositive,
  }
): JSX.Element => {
  return (
    <Row
      display={"inline-flex"}
      align={"center"}
      gap={2}
    >
      <RankIcon
        size={7}
        isPositive={isPositive}
      />
      <Text
        type={"secondary"}
        size={"small"}
        weight={"bold"}
        color={isPositive ? SUPPORT_4_50 : SUPPORT_2_50}
      >
        {number}%
      </Text>
    </Row>
  )
});

export default Rank;
