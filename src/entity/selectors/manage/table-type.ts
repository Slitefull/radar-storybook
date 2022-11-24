import { selector } from "recoil";
import { selectedTableTypeState } from "@/entity/atoms/manage/table-type";


enum TableTypes {
  domainsUrls = "domainsUrls",
  keywords = "keywords",
  redirectTesting = "redirectTesting",
}

const key = "manage/selectedTableType";

export const selectedTableTypeSelector = selector<TableTypes>({
  key,
  get: ({ get }) => get(selectedTableTypeState),
})
