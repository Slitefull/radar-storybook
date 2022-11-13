import { atom } from "recoil";


const key = "addDomain/excludeCertain";

export const excludeCertain = atom<number[]>({
  key,
  default: [],
});
