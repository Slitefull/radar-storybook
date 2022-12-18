import { atom } from "recoil";

import { LayoutTypes } from "@/entity/types/manage-domain";


const key = "manageDomain/selectedLayoutState";

export const selectedLayoutState = atom<LayoutTypes>({
  key,
  default: LayoutTypes.Settings,
});
