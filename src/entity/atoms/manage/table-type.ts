import { atom } from "recoil";


enum TableTypes {
  domainsUrls = "domainsUrls",
  keywords = "keywords",
  redirectTesting = "redirectTesting",
}

const key = "manage/selectedTableTypeState";

export const selectedTableTypeState = atom<TableTypes>({
  key,
  default: TableTypes.domainsUrls,
});
