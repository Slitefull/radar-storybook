import { selector } from "recoil";
import { tagsState } from "@/entity/atoms/monitoring/tags";

import { TagElement } from "@/entity/types/monitoring";


const key = "monitoring/tagsSelector";

export const tagsSelector = selector<TagElement[]>({
  key,
  get: ({ get }) => get(tagsState),
});
