import { selector } from "recoil";
import { authState } from "@/entity/atoms/auth/auth";


const key = "auth/authSelector"

export const authSelector = selector<boolean>({
  key,
  get: ({ get }) => get(authState),
})
