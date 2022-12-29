import { atom } from "recoil";

const key = "manage/selectedRowsAtom";

export const selectedRowsAtom = atom<any[]>({
  key,
  default: [{ id: 1 }, { id: 2 }],
});
