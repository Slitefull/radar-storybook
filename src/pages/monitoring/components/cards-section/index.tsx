import { FC, useCallback, useMemo } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useSetRecoilState } from "recoil";
import { isDisabledNextSlideState, isDisabledPrevSlideState } from "@/entity/atoms/monitoring/slider";
import { createMonitorChangesData } from '@/ui-kit/components/cards/monitor-changes/__mock__';
import faker from "faker";
import CardsSectionHeader from "./components/header";
import MonitorChangesCard from "@/ui-kit/components/cards/monitor-changes";

import { SSwiper } from "../../styled";
import { Column } from "@/global.css";


const SLIDERS_PER_VIEW = "auto";
const SLIDERS_SPACE_BETWEEN = 16;

const CardsSection: FC = (): JSX.Element => {
  const setIsDisabledPrev = useSetRecoilState<boolean>(isDisabledPrevSlideState);
  const setIsDisabledNext = useSetRecoilState<boolean>(isDisabledNextSlideState);

  const monitorChangesElements = useMemo(
    () => createMonitorChangesData(faker.datatype.number({ min: 15, max: 25 })),
    []
  );

  const onSlideChangeHandler = useCallback(
    (isBeginning: boolean, isEnd: boolean) => {
      if (!isBeginning && !isEnd) {
        setIsDisabledPrev(false);
        setIsDisabledNext(false);
      }
    },
    [setIsDisabledPrev, setIsDisabledNext]
  );

  const onReachBeginningHandler = useCallback(
    () => setIsDisabledPrev(true),
    [setIsDisabledPrev]
  );

  const onReachEndHandler = useCallback(
    () => setIsDisabledNext(true),
    [setIsDisabledNext]
  );

  return (
    <Column width={"100%"} gap={20}>
      <CardsSectionHeader/>
      <SSwiper
        spaceBetween={SLIDERS_SPACE_BETWEEN}
        slidesPerView={SLIDERS_PER_VIEW}
        onReachBeginning={onReachBeginningHandler}
        onReachEnd={onReachEndHandler}
        onSlideChange={({ isBeginning, isEnd }) => onSlideChangeHandler(isBeginning, isEnd)}
      >
        {monitorChangesElements.map((element, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "fit-content" }}
          >
            <MonitorChangesCard
              name={element.name}
              total={element.total}
              data={element.data}
            />
          </SwiperSlide>
        ))}
      </SSwiper>
    </Column>
  );
};

export default CardsSection;
