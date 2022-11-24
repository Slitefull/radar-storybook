import { FC, memo, ReactNode, useCallback, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isDisabledNextSlideState,
  isDisabledPrevSlideState,
  isLockedSliderState
} from "@/entity/atoms/monitor-changes/slider";
import RoundedArrow from "@/ui-kit/components/buttons/rounded-arrow";


interface SwiperNextButtonProps {
  children: ReactNode;
}

const SwiperNextButton: FC<SwiperNextButtonProps> = memo(({ children }) => {
  const swiper: any = useSwiper();
  const [IsDisabledNext, setIsDisabledNext] = useRecoilState(isDisabledNextSlideState);
  const setIsDisabledPrev = useSetRecoilState(isDisabledPrevSlideState);
  const setIsLockedSlider = useSetRecoilState(isLockedSliderState);

  const onNextSlideHandler = useCallback(
    () => {
      swiper.slideNext();
      setIsDisabledPrev(false);
      if (swiper.isEnd) setIsDisabledNext(true);
    },
    [swiper, setIsDisabledNext, setIsDisabledPrev]
  );

  useEffect(() => {
    if (swiper.isLocked) {
      setIsLockedSlider(true);
    }
  }, [swiper, setIsLockedSlider]);

  return (
    <RoundedArrow
      rotation={"right"}
      disabled={IsDisabledNext}
      onClick={onNextSlideHandler}
    >
      {children}
    </RoundedArrow>
  );
});

export default SwiperNextButton;
