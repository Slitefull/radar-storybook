import { atom } from "recoil";
import { ReactNode } from "react";


const key = "addDomain/excludeCertain";

export const excludeCertain = atom<ReactNode[]>({
  key,
  default: [],
});
