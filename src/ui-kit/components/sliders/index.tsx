import { FC, memo, ReactNode, useCallback, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useSwiperRef } from "@/ui-kit/hooks/useSwiperRef";

import Swiper from "swiper/types/swiper-class";
import "swiper/css/pagination";
import { Pagination, PaginationBullet, SFieldset, SSwiper } from "./styled";


interface SliderTextProps {
  elements: ReactNode[];
}

const SliderText: FC<SliderTextProps> = memo(({ elements }): JSX.Element => {
  const [swiper, setSwiper] = useState<Swiper>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [paginationElement, paginationRef] = useSwiperRef<HTMLDivElement>();

  const onClickHandler = useCallback(
    (index: number) => swiper?.slideTo(index),
    [swiper]
  );

  return (
    <SFieldset>
      <Pagination ref={paginationRef}>
        {elements.map((element, index) => (
          <PaginationBullet
            active={activeSlide === index}
            onClick={() => onClickHandler(index)}
          />
        ))}
      </Pagination>
      <SSwiper
        onSwiper={(swiper) => setSwiper(swiper)}
        pagination={{ el: paginationElement }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {elements.map((element, index) => (
          <SwiperSlide key={index}>
            {element}
          </SwiperSlide>
        ))}
      </SSwiper>
    </SFieldset>
  );
});

export default SliderText;
