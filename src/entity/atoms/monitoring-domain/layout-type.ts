import { atom } from "recoil";

import { LayoutTypes } from "@/entity/types/monitoring-domain";


const key = "monitoring-domain/layoutTypeState";

export const layoutTypeState = atom<LayoutTypes>({
  key,
  default: LayoutTypes.ListView,
});
