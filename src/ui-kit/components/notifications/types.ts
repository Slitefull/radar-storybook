import successIcon from '@/ui-kit/icons/check.svg';
import warningIcon from '@/ui-kit/icons/warning.svg';
import infoIcon from '@/ui-kit/icons/info.svg';
import errorIcon from '@/ui-kit/icons/error.svg';


export enum ToastPosition {
  topRight = 'topRight',
  bottomRight = 'bottomRight',
  topLeft = 'topLeft',
  bottomLeft = 'bottomLeft',
}

export interface ToastContainerProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface NotificationProps {
  type?: ToastTypes;
}

export enum ToastTypes {
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Error = 'error'
}

export const NotificationColorsByType: Record<ToastTypes, string> = {
  [ToastTypes.Success]: '#5cb85c',
  [ToastTypes.Warning]: '#f0ad4e',
  [ToastTypes.Info]: '#5bc0de',
  [ToastTypes.Error]: '#d9534f',
};

export const NotificationIconsByType: Record<ToastTypes, string> = {
  [ToastTypes.Success]: successIcon,
  [ToastTypes.Warning]: warningIcon,
  [ToastTypes.Info]: infoIcon,
  [ToastTypes.Error]: errorIcon,
};
