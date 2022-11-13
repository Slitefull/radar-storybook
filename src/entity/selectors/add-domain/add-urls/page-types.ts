import { selector } from "recoil";
import { pageTypes } from "@/entity/atoms/add-domain/add-urls/page-types";


const key = "addDomain/getPageTypes";

export const getPageTypes = selector<number[]>({
  key,
  get: ({ get }) => get(pageTypes),
});
