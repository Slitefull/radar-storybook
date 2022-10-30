import { atom } from "recoil";
import { ReactNode } from "react";


const key = "addDomain/customTests";

export const customTests = atom<ReactNode[]>({
  key,
  default: [],
});
