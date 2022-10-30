import { atom } from "recoil";
import { ReactNode } from "react";


const key = "addDomain/ignoreCertain";

export const ignoreCertain = atom<ReactNode[]>({
  key,
  default: [],
});
