import { selector } from "recoil";
import { layoutTypeState } from "@/entity/atoms/monitoring-domain/layout-type";

import { LayoutTypes } from "@/entity/types/monitoring-domain";


const key = "manageDomain/selectedLayoutSelector";

export const selectedLayoutSelector = selector<LayoutTypes>({
  key,
  get: ({ get }) => get(layoutTypeState),
});
