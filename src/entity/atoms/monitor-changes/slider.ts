import { atom } from "recoil";


export const isDisabledPrevSlideState = atom<boolean>({
  key: "monitorChanges/isDisabledPrevSlideState",
  default: true,
})

export const isDisabledNextSlideState = atom<boolean>({
  key: "monitorChanges/isDisabledNextSlideState",
  default: false,
})

export const isLockedSliderState = atom<boolean>({
  key: "monitorChanges/isLockedSliderState",
  default: false,
})
