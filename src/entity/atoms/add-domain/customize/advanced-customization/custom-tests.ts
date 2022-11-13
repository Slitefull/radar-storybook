import { atom } from "recoil";


const key = "addDomain/customTests";

export const customTests = atom<number[]>({
  key,
  default: [],
});
