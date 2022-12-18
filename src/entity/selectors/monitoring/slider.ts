import { selector } from "recoil";
import {
  isDisabledNextSlideState,
  isDisabledPrevSlideState,
  isLockedSliderState
} from "../../atoms/monitoring/slider";


export const isDisabledPrevSlideSelector = selector<boolean>({
  key: "monitoring/isDisabledPrevSlideSelector",
  get: ({ get }) => get(isDisabledPrevSlideState),
})

export const isDisabledNextSlideSelector = selector<boolean>({
  key: "monitoring/isDisabledNextSlideSelector",
  get: ({ get }) => get(isDisabledNextSlideState),
})

export const isLockedSliderSelector = selector<boolean>({
  key: "monitoring/isLockedSliderSelector",
  get: ({ get }) => get(isLockedSliderState),
})
