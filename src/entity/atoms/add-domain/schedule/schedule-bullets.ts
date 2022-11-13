import { atom } from "recoil";


const key = "addDomain/scheduleBullets";

export const scheduleBullets = atom<number[]>({
  key,
  default: [0],
})
