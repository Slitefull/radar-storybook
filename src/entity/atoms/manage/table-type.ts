import { atom } from "recoil";

import { LayoutTypes } from "@/entity/types/manage";


const key = "manage/selectedTableTypeState";

export const selectedTableTypeState = atom<LayoutTypes>({
  key,
  default: LayoutTypes.DomainsUrls,
});
