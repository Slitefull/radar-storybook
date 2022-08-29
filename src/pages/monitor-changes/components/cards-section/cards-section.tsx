import { FC, lazy, useCallback, useMemo } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useSetRecoilState } from "recoil";
import { mockMonitorChangesElements } from "@/pages/monitor-changes/__mock__/data";
import { isDisabledNextSlideState, isDisabledPrevSlideState } from "@/entity/atoms/monitor-changes/slider";

import { SSwiper } from "./styled";


const MonitorChangesCard = lazy(() => import("@/ui-kit/components/cards/monitor-changes/monitor-changes"));
const CardsSectionHeader = lazy(() => import("./components/header/cards-section-header"));

const SLIDERS_PER_VIEW = "auto";
const SLIDERS_SPACE_BETWEEN = 16;

const CardsSection: FC = (): JSX.Element => {
  const setIsDisabledPrev = useSetRecoilState(isDisabledPrevSlideState);
  const setIsDisabledNext = useSetRecoilState(isDisabledNextSlideState);

  const monitorChangesElements = useMemo(
    () => mockMonitorChangesElements,
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
    <SSwiper
      spaceBetween={SLIDERS_SPACE_BETWEEN}
      slidesPerView={SLIDERS_PER_VIEW}
      onReachBeginning={onReachBeginningHandler}
      onReachEnd={onReachEndHandler}
      onSlideChange={({ isBeginning, isEnd }) => onSlideChangeHandler(isBeginning, isEnd)}
    >
      <CardsSectionHeader/>
      {monitorChangesElements.map((element, index) => (
        <SwiperSlide
          key={index}
          style={{ width: "fit-content" }}
        >
          <MonitorChangesCard
            cardLink={element.cardLink}
            total={element.total}
          />
        </SwiperSlide>
      ))}
    </SSwiper>
  );
};

export default CardsSection;
