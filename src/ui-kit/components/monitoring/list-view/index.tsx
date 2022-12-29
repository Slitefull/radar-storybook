import { FC, memo } from 'react';
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { NEUTRAL_90, NEUTRAL_10, SUPPORT_2_50, TRANSPARENT } from "@/ui-kit/constants/colors";
import BorderedLayout from "@/ui-kit/components/layouts/bordered";
import LineSeparator from "@/ui-kit/components/separators/line";
import Rank from "@/ui-kit/components/typography/rank";
import Severity from "@/ui-kit/components/typography/severity";
import Text from "@/ui-kit/components/typography/text";

import { Severities } from '@/ui-kit/types/severities';
import { Column, Row } from '@/global.css';
import { TopInfoText } from "./styled";


type Percentage = {
  count: number;
  isPositive: boolean;
}

type Info = {
  name: string;
  count: number;
  percentage: Percentage;
}

type ColumnInfo = {
  severity: Severities;
  count: number;
  percentage: Percentage;
}

type Element = {
  text: string;
  count: number;
  isCritical: boolean;
}

type TColumn = {
  info: ColumnInfo;
  data: Element[];
}

interface MonitoringListViewProps {
  info: Info[];
  columns: TColumn[];
}

//TODO Refactor text SC
const MonitoringListView: FC<MonitoringListViewProps> = memo((
  {
    info,
    columns
  }
): JSX.Element => {
  return (
    <BorderedLayout>
      <Row gap={15} margin={"0 0 35px"}>
        {info.map((element, index, array) => {
          const { name, count, percentage } = element;

          return (
            <Row align={"center"} gap={5}>
              <TopInfoText withDecoration={index !== 0} isBig={false}>
                {capitalizeFirstLetter(name)}:
              </TopInfoText>
              <TopInfoText withDecoration={false} isBig={index === 0}>
                {count}
              </TopInfoText>
              <Rank number={percentage.count} isPositive={percentage.isPositive}/>

              {array.length - 1 !== index && (
                <LineSeparator
                  type={"vertical"}
                  variant={"dotted"}
                  width={"20px"}
                />
              )}
            </Row>
          )
        })}
      </Row>

      <Row gap={90}>
        {columns.map((column) => {
          const { info, data } = column;

          return (
            <Column gap={5}>
              <Row gap={10} align={"center"} margin={"0 0 20px"}>
                <Severity
                  size={"small"}
                  severity={info.severity}
                  weight={"bold"}
                  rounded
                >
                  {info.count}
                </Severity>
                <Severity size={"small"} severity={info.severity}>
                  {capitalizeFirstLetter(info.severity)}
                </Severity>
                <Rank
                  number={info.percentage.count}
                  isPositive={info.percentage.isPositive}
                />
              </Row>
              {data.map((element) => {
                const { text, count, isCritical } = element;

                return (
                  <Row gap={10}>
                    <Text
                      rounded
                      type={"secondary"}
                      textAlign={"center"}
                      size={"small"}
                      weight={"bold"}
                      color={isCritical ? NEUTRAL_10 : NEUTRAL_90}
                      background={isCritical ? SUPPORT_2_50 : TRANSPARENT}
                    >
                      {count}
                    </Text>
                    <Text
                      type={"secondary"}
                      size={"small"}
                    >
                      {text}
                    </Text>
                  </Row>
                )
              })}
            </Column>
          )
        })}
      </Row>
    </BorderedLayout>
  );
});

export default MonitoringListView;