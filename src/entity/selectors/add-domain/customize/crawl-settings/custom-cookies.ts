import { ReactNode } from "react";
import { selector } from "recoil";
import { customCookies } from "@/entity/atoms/add-domain/customize/crawl-settings/custom-cookies";


const key = "addDomain/getCustomCookies";

export const getCustomCookies = selector<ReactNode[]>({
  key,
  get: ({ get }) => get(customCookies),
});
