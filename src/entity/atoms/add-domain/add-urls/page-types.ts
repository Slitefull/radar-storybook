import { atom } from "recoil";


const key = "addDomain/pageTypes";

export const pageTypes = atom<number[]>({
  key,
  default: [0],
})
