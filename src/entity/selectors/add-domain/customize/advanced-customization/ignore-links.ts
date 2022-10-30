import { ReactNode } from "react";
import { selector } from "recoil";
import { customTests } from "@/entity/atoms/add-domain/customize/advanced-customization/custom-tests";
import { ignoreLinks } from "@/entity/atoms/add-domain/customize/advanced-customization/ignore-links";


const key = "addDomain/getIgnoreLinks";

export const getIgnoreLinks = selector<ReactNode[]>({
  key,
  get: ({ get }) => get(ignoreLinks),
});
