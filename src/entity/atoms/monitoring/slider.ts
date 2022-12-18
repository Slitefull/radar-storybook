import { atom } from "recoil";


export const isDisabledPrevSlideState = atom<boolean>({
  key: "monitoring/isDisabledPrevSlideState",
  default: true,
})

export const isDisabledNextSlideState = atom<boolean>({
  key: "monitoring/isDisabledNextSlideState",
  default: false,
})

export const isLockedSliderState = atom<boolean>({
  key: "monitoring/isLockedSliderState",
  default: false,
})
