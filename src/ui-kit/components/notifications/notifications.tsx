import { FC, memo, useEffect } from 'react';
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { notificationsState } from "@/entity/atoms/notifications";

import { NotificationIconsByType, ToastPosition, ToastTypes } from "./types";
import {
  NotificationDescription,
  NotificationImage,
  NotificationImageContainer,
  NotificationTextWrapper,
  NotificationTitle,
  StyledNotification,
  ToastContainer
} from './styled';


export interface Notification {
  icon?: string;
  title: string;
  description?: string;
  type?: ToastTypes;
}

interface NotificationsProps {
  position?: ToastPosition;
  autoDelete?: boolean;
  autoDeleteTime?: number;
}

const Notifications: FC<NotificationsProps> = memo((
  {
    position,
    autoDelete = true,
    autoDeleteTime = 3000
  }
): JSX.Element => {
  const [notifications, setNotifications] = useRecoilState<Notification[]>(notificationsState);

  const getCoordinates = (place: ToastPosition) => {
    switch (place) {
      case ToastPosition.topRight: {
        return { top: 12, right: 12 }
      }
      case ToastPosition.bottomRight: {
        return { right: 12, bottom: 12 }
      }
      case ToastPosition.topLeft: {
        return { top: 12, left: 12 }
      }
      case ToastPosition.bottomLeft: {
        return { bottom: 12, left: 12 }
      }
      default: {
        return { top: 12, right: 12 }
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && notifications.length) {
        setNotifications(notifications.filter((element, index) => index < notifications.length - 1))
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    }
  }, [notifications, autoDelete, autoDeleteTime]);

  return (
    createPortal(
      <ToastContainer {...getCoordinates(position!)}>
        {notifications.map((toast, i) =>
          <StyledNotification
            key={i}
            type={toast.type || ToastTypes.Success}
          >
            <NotificationImageContainer>
              <NotificationImage
                src={toast.icon || NotificationIconsByType[toast.type || ToastTypes.Success]}
                alt="Toast"
              />
            </NotificationImageContainer>
            <NotificationTextWrapper>
              <NotificationTitle>
                {toast.title}
              </NotificationTitle>
              {toast.description && (
                <NotificationDescription>
                  {toast.description}
                </NotificationDescription>
              )}
            </NotificationTextWrapper>
          </StyledNotification>
        )}
      </ToastContainer>,
      document.getElementById("notifications") || document.createElement('div'))
  );
});

export default Notifications;
