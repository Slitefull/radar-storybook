import { selector } from "recoil";
import { notificationsState } from "@/entity/atoms/notifications";
import { Notification } from "@/ui-kit/components/notifications/notifications";


const key = "ui-kit/notificationsSelector"

export const notificationsSelector = selector<Notification[]>({
  key,
  get: ({ get }) => get(notificationsState),
})
