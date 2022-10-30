import { atom } from "recoil";
import { ReactNode } from "react";


const key = "addDomain/pageLoad";

export const pageLoad = atom<ReactNode[]>({
  key,
  default: [],
});
