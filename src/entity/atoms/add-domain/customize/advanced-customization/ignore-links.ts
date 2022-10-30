import { atom } from "recoil";
import { ReactNode } from "react";


const key = "addDomain/ignoreLinks";

export const ignoreLinks = atom<ReactNode[]>({
  key,
  default: [],
});
