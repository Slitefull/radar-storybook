import { selector } from "recoil";
import { isLoadingAddDomain } from "@/entity/atoms/add-domain/add-domain-step";


export const getIsLoadingAddDomain = selector<boolean>({
  key: "addDomain/getIsLoadingAddDomain",
  get: ({ get }) => get(isLoadingAddDomain),
})
