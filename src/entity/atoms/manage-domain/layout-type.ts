import { atom } from "recoil";


enum LayoutTypes {
  settings = "domains",
  monitoredURLs = "keywords",
}

const key = "manageDomain/getSelectedLayout";

export const selectedLayoutState = atom<LayoutTypes>({
  key,
  default: LayoutTypes.settings,
});
