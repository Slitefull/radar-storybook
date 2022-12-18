import { selector } from "recoil";
import { resetPassword } from "@/entity/atoms/auth/reset-password";


const key = "auth/isResetPassword";

export const isResetPassword = selector<boolean>({
  key,
  get: ({ get }) => get(resetPassword),
})
