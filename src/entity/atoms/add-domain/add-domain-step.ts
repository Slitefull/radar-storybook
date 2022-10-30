import { atom } from "recoil";


const key = "addDomain/isLoadingAddDomain";

export const isLoadingAddDomain = atom<boolean>({
  key,
  default: false,
})
