import { atom } from "recoil";
import { createMockTags } from "@/entity/atoms/monitoring/__mock__";

import { TagElement } from "@/entity/types/monitoring";


const key = "monitoring/tagsState";

const mockData = createMockTags(10);

export const tagsState = atom<TagElement[]>({
  key,
  default: mockData,
});
