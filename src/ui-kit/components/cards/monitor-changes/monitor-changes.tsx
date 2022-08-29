import { FC, lazy, memo, useMemo, } from "react";
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { mockChartsInfo } from "./__mock__/data";

import {
  CRIMSON,
  DARK_GREY,
  LAVENDER,
  LAVENDER_BLUE,
  PLATINUM,
  ROYAL_PURPLE,
  SALMON_PINK,
  VIOLET
} from "@/ui-kit/constants/colors";

import {
  CardLink,
  CardWrapper,
  ChartInfo,
  ChartInfoText,
  ChartInfoWrapper,
  HorizontalLine,
  LeftSide,
  Percentage,
  RightSide,
  TotalNumbers,
  TotalText
} from "./styled";


type CardLinkType = { title: string; link: string };
type Total = { count: number; percentage: number; isPositive: boolean; };
type Label = 'RED' | 'CRI' | 'HIG' | "MED";

interface MonitorChangesCardProps {
  cardLink: CardLinkType;
  total: Total;
}

//TODO Ask about price of the line (scale)

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

const WithBackgroundText = lazy(() => import("@/ui-kit/components/text/with-background/with-background"));

const BAR_WIDTH = 110;

const MonitorChangesCard: FC<MonitorChangesCardProps> = memo(({ cardLink, total }): JSX.Element => {
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    categoryPercentage: 0.6,
    barPercentage: 0.8,
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
          stepSize: 10,
        }
      },
      y: {
        display: true,
        grid: {
          display: true,
          drawTicks: false,
          color: 'transparent',
        },
        ticks: {
          display: false,
        }
      }
    },
  };

  const labels: Label[] = useMemo(
    () => ['RED', 'CRI', 'HIG', "MED"],
    []
  );

  //TODO check the colors
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 5, max: 100 })),
        backgroundColor: [CRIMSON, VIOLET, ROYAL_PURPLE, DARK_GREY],
      },
      {
        data: labels.map(() => faker.datatype.number({ min: 5, max: 100 })),
        backgroundColor: [SALMON_PINK, LAVENDER, LAVENDER_BLUE, PLATINUM],
      },
    ],
  };

  const chartsInfo = useMemo(
    () => mockChartsInfo,
    []
  );

  return (
    <CardWrapper>
      <LeftSide>
        <CardLink
          href={cardLink.link}
          target="_blank"
        >
          {cardLink.title}
        </CardLink>

        <ChartInfoWrapper>
          {chartsInfo.map((element, index) => (
            <ChartInfo key={index}>
              <ChartInfoText>{element.label}</ChartInfoText>
              <WithBackgroundText
                background={element.countBullet.color}
                rounded
              >
                {element.countBullet.count}
              </WithBackgroundText>
              <Percentage isPositive={element.percentage.isPositive}>
                {element.percentage.isPositive ? '+' : '-'}{element.percentage.count}%
              </Percentage>
            </ChartInfo>
          ))}
        </ChartInfoWrapper>
        <HorizontalLine/>
      </LeftSide>

      <RightSide>
        <TotalText>
          total: <TotalNumbers>{total.count} </TotalNumbers>
          <Percentage isPositive={total.isPositive}>
            {total.isPositive ? '+' : '-'}{total.percentage}%
          </Percentage>
        </TotalText>
        <Bar
          options={options}
          data={data}
          width={BAR_WIDTH}
          style={{ border: `1px solid ${PLATINUM}` }}
        />
      </RightSide>
    </CardWrapper>
  );
});

export default MonitorChangesCard;
