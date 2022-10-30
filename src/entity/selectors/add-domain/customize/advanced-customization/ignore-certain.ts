import { ReactNode } from "react";
import { selector } from "recoil";
import { ignoreCertain } from "@/entity/atoms/add-domain/customize/advanced-customization/ignore-certain";


const key = "addDomain/getIgnoreCertain";

export const getIgnoreCertain = selector<ReactNode[]>({
  key,
  get: ({ get }) => get(ignoreCertain),
});
