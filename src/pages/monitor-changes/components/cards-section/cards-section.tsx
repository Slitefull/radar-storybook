import { FC, lazy, useCallback, useMemo } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useSetRecoilState } from "recoil";
import { isDisabledNextSlideState, isDisabledPrevSlideState } from "@/entity/atoms/monitor-changes/slider";

import { StyledSwiper } from "./styled";


const MonitorChangesCard = lazy(() => import("@/ui-kit/components/cards/monitor-changes/monitor-changes"));
const CardsSectionHeader = lazy(() => import("./components/header/cards-section-header"));

const SLIDERS_PER_VIEW = "auto";
const SLIDERS_SPACE_BETWEEN = 16;

const CardsSection: FC = (): JSX.Element => {
  const setIsDisabledPrev = useSetRecoilState(isDisabledPrevSlideState);
  const setIsDisabledNext = useSetRecoilState(isDisabledNextSlideState);

  const monitorChangesElements = useMemo(
    () => [
      {
        cardLink: { title: "yahoo.com", link: "https://yahoo.com" },
        total: { count: 10, percentage: 5, isPositive: true }
      },
      {
        cardLink: { title: "amazon.com", link: "https://amazon.com" },
        total: { count: 10, percentage: 5, isPositive: true }
      },
      {
        cardLink: { title: "washington", link: "https://washingtonpost.com" },
        total: { count: 10, percentage: 5, isPositive: true }
      },
      {
        cardLink: { title: "domain.com", link: "https://domain.com" },
        total: { count: 10, percentage: 5, isPositive: true }
      },
      {
        cardLink: { title: "seoradar.com", link: "https://seoradar.com" },
        total: { count: 10, percentage: 5, isPositive: true }
      },
      {
        cardLink: { title: "test.com", link: "https://seoradar.com" },
        total: { count: 10, percentage: 5, isPositive: true }
      },
      {
        cardLink: { title: "test.com", link: "https://seoradar.com" },
        total: { count: 10, percentage: 5, isPositive: true }
      },
    ],
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
    <StyledSwiper
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
    </StyledSwiper>
  );
};

export default CardsSection;
