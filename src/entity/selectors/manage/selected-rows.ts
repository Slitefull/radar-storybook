import { selector } from "recoil";
import { selectedRowsAtom } from "@/entity/atoms/manage/selected-rows";


const key = "manage/selectedRowsSelector";

export const selectedRowsSelector = selector<any[]>({
  key,
  get: ({ get }) => get(selectedRowsAtom),
});
