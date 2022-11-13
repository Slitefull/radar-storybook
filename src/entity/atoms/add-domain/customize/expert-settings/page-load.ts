import { atom } from "recoil";


const key = "addDomain/pageLoad";

export const pageLoad = atom<number[]>({
  key,
  default: [],
});
