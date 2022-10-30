import { atom } from "recoil";


const key = "addDomain/httpHeaders";

export const httpHeaders = atom<number[]>({
  key,
  default: [],
});
