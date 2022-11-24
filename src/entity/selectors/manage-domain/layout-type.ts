import { selector } from "recoil";
import { selectedLayoutState } from "@/entity/atoms/manage-domain/layout-type";


enum LayoutTypes {
  settings = "domains",
  monitoredURLs = "keywords",
}

const key = "manageDomain/selectedLayout";

export const selectedLayoutSelector = selector<LayoutTypes>({
  key,
  get: ({ get }) => get(selectedLayoutState),
});
