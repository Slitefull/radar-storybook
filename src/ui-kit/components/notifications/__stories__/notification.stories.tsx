import { withRecoilFlow } from "storybook-addon-recoil-flow/dist/decorator";
import { ComponentMeta, Story } from '@storybook/react';
import Notifications, { Notification } from "../notifications";
import success from "@/ui-kit/icons/check.svg"
import error from "@/ui-kit/icons/error.svg"
import warning from "@/ui-kit/icons/warning.svg"
import info from "@/ui-kit/icons/info.svg"

import { ToastTypes } from "../types";

import {
  NotificationDescription,
  NotificationImage,
  NotificationImageContainer,
  NotificationTextWrapper,
  NotificationTitle,
  StyledNotification
} from "../styled";


export default {
  title: 'ui-kit/Notification',
  component: Notifications,
  argTypes: {
    type: {
      options: [ToastTypes.Success, ToastTypes.Error, ToastTypes.Warning, ToastTypes.Info],
      control: { type: 'radio' },
    },
    icon: {
      options: [success, error, warning, info],
      control: { type: 'radio' },
    }
  },
  decorators: [withRecoilFlow],
} as ComponentMeta<typeof Notifications>;

const Template: Story<Notification> = (
  {
    title,
    type,
    icon,
    description
  }
) => {
  return (
    <StyledNotification type={type}>
      <NotificationImageContainer>
        <NotificationImage src={icon} alt="Toast"/>
      </NotificationImageContainer>
      <NotificationTextWrapper>
        <NotificationTitle>
          {title}
        </NotificationTitle>
        <NotificationDescription>
          {description}
        </NotificationDescription>
      </NotificationTextWrapper>
    </StyledNotification>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'I am title!',
  description: "I am description!",
  icon: success
};
