import { atom } from "recoil";


const key = "auth/authState";

export const authState = atom<boolean>({
  key,
  default: true,
});
