import { atom } from "recoil";


const key = "addDomain/selectedUrlsRadio";

export const selectedUrlsRadio = atom<string>({
  key,
  default: "",
})
