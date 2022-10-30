import { ReactNode } from "react";
import { selector } from "recoil";
import { customTests } from "@/entity/atoms/add-domain/customize/advanced-customization/custom-tests";


const key = "addDomain/getCustomTests";

export const getCustomTests = selector<ReactNode[]>({
  key,
  get: ({ get }) => get(customTests),
});
