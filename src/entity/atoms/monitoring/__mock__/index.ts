import faker from "faker";

import { TagElement } from "@/entity/types/monitoring";


const createTag = (): TagElement => ({
  name: faker.commerce.product(),
  title: faker.commerce.product(),
  checked: faker.datatype.boolean(),
});

export const createMockTags = (tagsCount: number = 5): TagElement[] => {
  return Array.from({ length: tagsCount }, createTag);
}
