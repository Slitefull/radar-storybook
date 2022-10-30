import styled from "styled-components";

import { NotificationProps, ToastContainerProps } from "./types";


export const ToastContainer = styled.div<ToastContainerProps>`
  ${({ theme }) => theme.components.generals.notifications.ToastContainer}
`;

export const SNotification = styled.div<NotificationProps>`
  ${({ theme }) => theme.components.generals.notifications.SNotification}
`;

export const NTextWrapper = styled.div`
  ${({ theme }) => theme.components.generals.notifications.NTextWrapper}
`;

export const NTitle = styled.p`
  ${({ theme }) => theme.components.generals.notifications.NTitle}
`;

export const NDescription = styled.p`
  ${({ theme }) => theme.components.generals.notifications.NDescription}
`;

export const NImageContainer = styled.div`
  ${({ theme }) => theme.components.generals.notifications.NImageContainer}
`;

export const NImage = styled.img`
  ${({ theme }) => theme.components.generals.notifications.NImage}
`;
