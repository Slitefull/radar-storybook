import { FC, memo } from 'react';
import { useRoutes } from "react-router-dom";
import loadable from "@loadable/component";
import AuthLayout from "@/ui-kit/components/layouts/auth";
import MainLayout from "@/ui-kit/components/layouts/main";
import ModalLayout from "@/ui-kit/components/layouts/modal";
import {
  ADD_DOMAIN_PAGE,
  CHANGE_PASSWORD_PAGE,
  MANAGE_DOMAIN_PAGE,
  MANAGE_PAGE,
  RESET_PASSWORD_PAGE,
  MONITOR_CHANGES_PAGE,
  SIGN_IN_PAGE,
  SIGN_UP_PAGE
} from "@/constants/routes";


const SignInPageRouter = loadable(() => import("@/pages/sign-in/sign-in"));
const SignUpPageRouter = loadable(() => import("@/pages/sign-up/sign-up"));
const ChangePasswordPageRouter = loadable(() => import("@/pages/change-password/change-password"));
const ResetPasswordPageRouter = loadable(() => import("@/pages/reset-password/reset-password"));
const MonitorChangesPageRouter = loadable(() => import("@/pages/monitor-changes/monitor-changes"));
const AddDomainPageRouter = loadable(() => import("@/pages/add-domain/add-domain"));
const ManagePageRouter = loadable(() => import("@/pages/manage"));
const ManageDomainPageRouter = loadable(() => import("@/pages/manage-domain"));

const Router: FC = memo(() => {
  return useRoutes([
    {
      element: <AuthLayout/>,
      children: [
        { path: SIGN_IN_PAGE, element: <SignInPageRouter/> },
        { path: SIGN_UP_PAGE, element: <SignUpPageRouter/> },
        { path: RESET_PASSWORD_PAGE, element: <ResetPasswordPageRouter/> },
        { path: CHANGE_PASSWORD_PAGE, element: <ChangePasswordPageRouter/> },
      ],
    },
    {
      element: <MainLayout/>,
      children: [
        { path: MONITOR_CHANGES_PAGE, element: <MonitorChangesPageRouter/> },
        { path: MANAGE_PAGE, element: <ManagePageRouter/> },
        { path: MANAGE_DOMAIN_PAGE, element: <ManageDomainPageRouter/> },
      ],
    },
    {
      element: <ModalLayout/>,
      children: [
        { path: ADD_DOMAIN_PAGE, element: <AddDomainPageRouter/> },
      ],
    },
  ]);
});

export default Router;