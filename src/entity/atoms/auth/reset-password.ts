import { atom } from "recoil";


const key = "auth/resetPassword";

export const resetPassword = atom<boolean>({
  key,
  default: false,
});
