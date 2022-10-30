import { atom } from "recoil";


const key = "addDomain/customCookies";

export const customCookies = atom<number[]>({
  key,
  default: [],
});
