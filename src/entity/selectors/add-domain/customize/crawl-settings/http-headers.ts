import { ReactNode } from "react";
import { selector } from "recoil";
import { httpHeaders } from "@/entity/atoms/add-domain/customize/crawl-settings/http-headers";


const key = "addDomain/getHttpHeaders";

export const getHttpHeaders = selector<ReactNode[]>({
  key,
  get: ({ get }) => get(httpHeaders),
});
