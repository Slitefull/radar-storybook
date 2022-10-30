import { css } from "styled-components/macro";
import { BLACK, SPANISH_GREY, WHITE } from "@/ui-kit/constants/colors";

import { NotificationColorsByType, NotificationProps, ToastContainerProps } from "../types";


const ToastContainer = css<ToastContainerProps>`
  position: fixed;
  transition: transform .5s ease-in-out;
  animation: toast-in-right 0.4s;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);

    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);

    }
    to {
      transform: translateX(0);
    }
  }
`;

const SNotification = css<NotificationProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: .3s ease;
  position: relative;
  pointer-events: auto;
  padding: 15px;
  margin: 0 0 15px;
  width: 300px;
  max-height: 100px;
  border-radius: 3px;
  box-shadow: 0 0 10px ${SPANISH_GREY};
  color: ${BLACK};
  background: ${({ type }) => NotificationColorsByType[type!] || "#5cb85c"};

  &:hover {
    box-shadow: 0 0 12px ${WHITE};
    cursor: pointer;
  }
`;

const NTextWrapper = css`
  display: flex;
  flex-direction: column;
`;

const NTitle = css`
  font-size: 16px;
  font-weight: 700;
  color: ${WHITE};
  margin: 0 0 5px;
`;

const NDescription = css`
  text-align: left;
  color: ${WHITE};
`;

const NImageContainer = css`
  float: left;
  margin-right: 15px;
`;

const NImage = css`
  width: 30px;
  height: 30px;
`;

export const notifications = {
  ToastContainer,
  SNotification,
  NTextWrapper,
  NTitle,
  NDescription,
  NImageContainer,
  NImage,
};
