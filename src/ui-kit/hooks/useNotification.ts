import { useSetRecoilState } from "recoil";
import { notificationsState } from "../../entity/atoms/notifications/notifications";
import { Notification } from "../components/notifications";


interface UseNotificationReturnType {
  notify: (notification: Notification) => void;
}

export const useNotification = (): UseNotificationReturnType => {
  const setNotifications = useSetRecoilState<Notification[]>(notificationsState);
  const notify = (notification: Notification) => {
    setNotifications((currentState) => [...currentState, notification]);
  }

  return { notify }
}
