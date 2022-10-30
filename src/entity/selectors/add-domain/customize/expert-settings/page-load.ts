import { ReactNode } from "react";
import { selector } from "recoil";
import { pageLoad } from "@/entity/atoms/add-domain/customize/expert-settings/page-load";


const key = "addDomain/getPageLoad";

export const getPageLoad = selector<ReactNode[]>({
  key,
  get: ({ get }) => get(pageLoad),
});
