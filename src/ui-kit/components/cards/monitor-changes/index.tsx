import { FC, memo, useCallback, } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, } from "chart.js";
import { Bar } from "react-chartjs-2";
import { MONITORING_PAGE } from "@/constants/routes";
import Severity from "@/ui-kit/components/typography/severity";
import Rank from "../../typography/rank";
import faker from "faker";
import {
  NEUTRAL_20,
  NEUTRAL_50,
  PRIMARY_10,
  PRIMARY_100,
  PRIMARY_30,
  PRIMARY_50,
  SUPPORT_2_30,
  SUPPORT_2_60
} from "@/ui-kit/constants/colors";

import { Severities } from "@/ui-kit/types/severities";
import {
  CardName,
  CardWrapper,
  ChartInfo,
  ChartInfoText,
  ChartInfoWrapper,
  HorizontalLine,
  LeftSide,
  RightSide,
  TotalNumbers,
  TotalText
} from "./styled";


type Total = { count: number; percentage: number; isPositive: boolean };
type Label = "RED" | "CRI" | "HIG" | "MED";
type Percentage = { count: number; isPositive: boolean };

type DataElement = {
  severity: Severities;
  count: number;
  percentage: Percentage;
}

interface MonitorChangesCardProps {
  name: string;
  total: Total;
  data: DataElement[];
}

//TODO Ask about price of the line (scale)

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

const BAR_WIDTH = 120;

const MonitorChangesCard: FC<MonitorChangesCardProps> = memo((
  {
    name,
    total,
    data,
  }
): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    categoryPercentage: 0.5,
    barPercentage: 0.5,
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: false,
          stepSize: 20,
        }
      },
      y: {
        display: true,
        grid: {
          display: true,
          drawTicks: false,
          color: "transparent",
        },
        ticks: {
          display: false,
        }
      }
    },
  };

  const labels: Label[] = ["RED", "CRI", "HIG", "MED"];

  //TODO check the colors
  const barData = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 5, max: 100 })),
        backgroundColor: [SUPPORT_2_60, PRIMARY_100, PRIMARY_50, NEUTRAL_50],
      },
      {
        data: labels.map(() => faker.datatype.number({ min: 5, max: 100 })),
        backgroundColor: [SUPPORT_2_30, PRIMARY_30, PRIMARY_10, NEUTRAL_20],
      },
    ],
  };

  const onClickHandler = useCallback(
    () => navigate(`${MONITORING_PAGE}/${name}`),
    [navigate, name]
  );

  return (
    <CardWrapper>
      <LeftSide>
        <CardName onClick={onClickHandler}>
          {name}
        </CardName>

        <ChartInfoWrapper>
          {data.map((element, index) => (
            <ChartInfo key={index}>
              <ChartInfoText>{element.severity.substr(0, 3)}</ChartInfoText>
              <Severity severity={element.severity} size={"small"} rounded>
                {element.count}
              </Severity>
              <Rank
                number={element.percentage.count}
                isPositive={element.percentage.isPositive}
              />
            </ChartInfo>
          ))}
        </ChartInfoWrapper>
        <HorizontalLine/>
      </LeftSide>

      <RightSide>
        <TotalText>
          {t("total")}: <TotalNumbers>{total.count}</TotalNumbers>
          <Rank number={total.percentage} isPositive={total.isPositive}/>
        </TotalText>
        <Bar
          options={options}
          data={barData}
          width={BAR_WIDTH}
          style={{ border: `1px solid ${NEUTRAL_20}` }}
        />
      </RightSide>
    </CardWrapper>
  );
});

export default MonitorChangesCard;
