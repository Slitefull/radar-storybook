import { atom } from "recoil";
import { Notification } from "@/ui-kit/components/notifications";


const key = "ui-kit/notificationsState";

export const notificationsState = atom<Notification[]>({
  key,
  default: [],
})
