import { selector } from "recoil";
import { selectedLayoutState } from "@/entity/atoms/manage-domain/layout-type";

import { LayoutTypes } from "@/entity/types/manage-domain";


const key = "manageDomain/selectedLayoutSelector";

export const selectedLayoutSelector = selector<LayoutTypes>({
  key,
  get: ({ get }) => get(selectedLayoutState),
});
