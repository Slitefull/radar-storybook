import { atom } from "recoil";


const key = "addDomain/ignoreCertain";

export const ignoreCertain = atom<number[]>({
  key,
  default: [],
});
