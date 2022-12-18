import { selector } from "recoil";
import { selectedTableTypeState } from "@/entity/atoms/manage/table-type";

import { LayoutTypes } from "@/entity/types/manage";


const key = "manage/selectedTableType";

export const selectedTableTypeSelector = selector<LayoutTypes>({
  key,
  get: ({ get }) => get(selectedTableTypeState),
});
