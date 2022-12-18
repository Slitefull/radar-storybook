import { FC, memo } from 'react';
import { useRoutes } from "react-router-dom";
import loadable from "@loadable/component";
import AuthLayout from "@/router/layouts/auth";
import MainLayout from "@/ui-kit/components/layouts/main";
import ModalLayout from "@/ui-kit/components/layouts/modal";
import MonitoringLayout from "@/router/layouts/monitoring";
import NotFoundRoute from "@/router/not-found-route";
import {
  ADD_DOMAIN_PAGE,
  CHANGE_PASSWORD_PAGE,
  COMPETITORS_PAGE,
  HELP_PAGE,
  MANAGE_DOMAIN_PAGE,
  MANAGE_PAGE, MONITORING_DOMAIN_PAGE,
  MONITORING_PAGE,
  REPORTS_PAGE,
  RESET_PASSWORD_PAGE,
  SEO_AUDIT_PAGE,
  SIGN_IN_PAGE,
  SIGN_UP_PAGE,
  TOOLS_PAGE
} from "@/constants/routes";


const SignInPageRouter = loadable(() => import("@/pages/sign-in"));
const SignUpPageRouter = loadable(() => import("@/pages/sign-up"));
const ChangePasswordPageRouter = loadable(() => import("@/pages/change-password"));
const ResetPasswordPageRouter = loadable(() => import("@/pages/reset-password"));
const MonitoringPageRouter = loadable(() => import("@/pages/monitoring"));
const MonitoringDomainPageRouter = loadable(() => import("@/pages/monitoring-domain"));
const AddDomainPageRouter = loadable(() => import("@/pages/add-domain"));
const ManagePageRouter = loadable(() => import("@/pages/manage"));
const ManageDomainPageRouter = loadable(() => import("@/pages/manage-domain"));
const CompetitorsPageRouter = loadable(() => import("@/pages/competitors"));
const SeoAuditPageRouter = loadable(() => import("@/pages/seo-audit"));
const ToolsPageRouter = loadable(() => import("@/pages/tools"));
const ReportsPageRouter = loadable(() => import("@/pages/reports"));
const HelpPageRouter = loadable(() => import("@/pages/help"));

const Router: FC = memo(() => {
  return useRoutes([
    {
      path: "/*",
      element: <NotFoundRoute/>
    },
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
        { path: MANAGE_PAGE, element: <ManagePageRouter/> },
        { path: MANAGE_DOMAIN_PAGE, element: <ManageDomainPageRouter/> },
        { path: COMPETITORS_PAGE, element: <CompetitorsPageRouter/> },
        { path: SEO_AUDIT_PAGE, element: <SeoAuditPageRouter/> },
        { path: TOOLS_PAGE, element: <ToolsPageRouter/> },
        { path: REPORTS_PAGE, element: <ReportsPageRouter/> },
        { path: HELP_PAGE, element: <HelpPageRouter/> },
      ],
    },
    {
      element: <ModalLayout/>,
      children: [
        { path: ADD_DOMAIN_PAGE, element: <AddDomainPageRouter/> },
      ],
    },
    {
      element: <MonitoringLayout/>,
      children: [
        { path: MONITORING_PAGE, element: <MonitoringPageRouter/> },
        { path: MONITORING_DOMAIN_PAGE, element: <MonitoringDomainPageRouter/> },
      ],
    },
  ]);
});

export default Router;