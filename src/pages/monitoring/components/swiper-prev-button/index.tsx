import { FC, memo, ReactNode, useCallback } from "react";
import { useSwiper } from "swiper/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isDisabledNextSlideState, isDisabledPrevSlideState } from "@/entity/atoms/monitoring/slider";
import RoundedArrow from "@/ui-kit/components/buttons/rounded-arrow";


interface SwiperPrevButtonProps {
  children: ReactNode;
}

const SwiperPrevButton: FC<SwiperPrevButtonProps> = memo(({ children }) => {
  const swiper = useSwiper();
  const [IsDisabledPrev, setIsDisabledPrev] = useRecoilState(isDisabledPrevSlideState);
  const setIsDisabledNext = useSetRecoilState(isDisabledNextSlideState);

  const onPrevSlideHandler = useCallback(
    () => {
      swiper.slidePrev();
      setIsDisabledNext(false);
      if (swiper.isBeginning) setIsDisabledPrev(true);
    },
    [swiper, setIsDisabledPrev, setIsDisabledNext]
  );

  return (
    <RoundedArrow
      rotation={"left"}
      disabled={IsDisabledPrev}
      onClick={onPrevSlideHandler}
      arrowSize={7}
    >
      {children}
    </RoundedArrow>
  );
});

export default SwiperPrevButton;
