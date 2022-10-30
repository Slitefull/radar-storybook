import { ReactNode } from "react";
import { selector } from "recoil";
import { excludeCertain } from "@/entity/atoms/add-domain/customize/advanced-customization/exclude-certain";


const key = "addDomain/getExcludeCertain";

export const getExcludeCertain = selector<ReactNode[]>({
  key,
  get: ({ get }) => get(excludeCertain),
});
