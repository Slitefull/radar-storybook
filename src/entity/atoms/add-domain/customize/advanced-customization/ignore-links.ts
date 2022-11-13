import { atom } from "recoil";


const key = "addDomain/ignoreLinks";

export const ignoreLinks = atom<number[]>({
  key,
  default: [],
});
