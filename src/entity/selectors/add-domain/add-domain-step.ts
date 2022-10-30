import { selector } from "recoil";
import { isLoadingAddDomain } from "@/entity/atoms/add-domain/add-domain-step";


const key = "addDomain/getIsLoadingAddDomain";

export const getIsLoadingAddDomain = selector<boolean>({
  key,
  get: ({ get }) => get(isLoadingAddDomain),
})
