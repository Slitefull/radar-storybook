import { selector } from "recoil";
import {
  isDisabledNextSlideState,
  isDisabledPrevSlideState,
  isLockedSliderState
} from "../../atoms/monitor-changes/slider";


export const isDisabledPrevSlideSelector = selector<boolean>({
  key: "monitorChanges/isDisabledPrevSlideSelector",
  get: ({ get }) => get(isDisabledPrevSlideState),
})

export const isDisabledNextSlideSelector = selector<boolean>({
  key: "monitorChanges/isDisabledNextSlideSelector",
  get: ({ get }) => get(isDisabledNextSlideState),
})

export const isLockedSliderSelector = selector<boolean>({
  key: "monitorChanges/isLockedSliderSelector",
  get: ({ get }) => get(isLockedSliderState),
})
