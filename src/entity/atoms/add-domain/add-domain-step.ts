import { atom } from "recoil";


export const isLoadingAddDomain = atom<boolean>({
  key: "addDomain/isLoadingAddDomain",
  default: false,
})
