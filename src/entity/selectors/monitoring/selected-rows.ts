import { selector } from "recoil";
import { selectedRowsAtom } from "@/entity/atoms/monitoring/selected-rows";


const key = "monitoring/selectedRowsSelector";

export const selectedRowsSelector = selector<any[]>({
  key,
  get: ({ get }) => get(selectedRowsAtom),
});
