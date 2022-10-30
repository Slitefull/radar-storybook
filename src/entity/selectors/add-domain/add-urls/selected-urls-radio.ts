import { selector } from "recoil";
import { selectedUrlsRadio } from "@/entity/atoms/add-domain/add-urls/selected-urls-radio";


const key = "addDomain/getSelectedUrlsRadio";

export const getSelectedUrlsRadio = selector<string>({
  key,
  get: ({ get }) => get(selectedUrlsRadio),
});
