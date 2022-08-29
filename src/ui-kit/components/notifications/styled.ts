import styled from "styled-components";
import { css } from "styled-components/macro";

import { NotificationProps, ToastContainerProps } from "./types";


export const ToastContainer = styled.div<ToastContainerProps>` && {
  ${({ theme }) => css`${theme.components.notifications.ToastContainer}`}
}`

export const SNotification = styled.div<NotificationProps>` && {
  ${({ theme }) => css`${theme.components.notifications.SNotification}`}
}`

export const NotificationTextWrapper = styled.div` && {
  ${({ theme }) => css`${theme.components.notifications.NotificationTextWrapper}`}
}`

export const NotificationTitle = styled.p` && {
  ${({ theme }) => css`${theme.components.notifications.NotificationTitle}`}
}`

export const NotificationDescription = styled.p` && {
  ${({ theme }) => css`${theme.components.notifications.NotificationDescription}`}
}`

export const NotificationImageContainer = styled.div` && {
  ${({ theme }) => css`${theme.components.notifications.NotificationImageContainer}`}
}`

export const NotificationImage = styled.img` && {
  ${({ theme }) => css`${theme.components.notifications.NotificationImage}`}
}`
