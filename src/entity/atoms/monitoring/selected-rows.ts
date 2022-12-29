import { atom } from "recoil";

const key = "monitoring/selectedRowsAtom";

export const selectedRowsAtom = atom<string[]>({
  key,
  default: [],
});
