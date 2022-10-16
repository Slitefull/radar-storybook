import { FC, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { light } from "@/ui-kit/themes/light/light";
import { Themes } from "@/constants/themes";
import { currentMenuItemLS } from "@/constants/local-storage";
import { authSelector } from "@/entity/selectors/auth";
import { currentMenuItemState } from "@/entity/atoms/currentMenuItem";
import loadable from '@loadable/component'
import SidebarFallback from "@/ui-kit/components/sidebar/fallback/fallback";
import {
  ADD_DOMAIN_PAGE,
  CHANGE_PASSWORD_PAGE,
  RESET_PASSWORD_PAGE,
  ROOT_PAGE,
  SIGN_IN_PAGE,
  SIGN_UP_PAGE
} from "@/constants/routes";
import "../infrastructure/i18n";

import GlobalCSS, { BodyWrapper } from "@/global.css";


const SignInPageRouter = loadable(() => import("@/pages/sign-in/sign-in"));
const SignUpPageRouter = loadable(() => import("@/pages/sign-up/sign-up"));
const ChangePasswordPageRouter = loadable(() => import("@/pages/change-password/change-password"));
const ResetPasswordPageRouter = loadable(() => import("@/pages/reset-password/reset-password"));
const MonitorChangesPageRouter = loadable(() => import("@/pages/monitor-changes/monitor-changes"));
const AddDomainPageRouter = loadable(() => import("@/pages/add-domain/add-domain"));

const Sidebar = loadable(() => import("@/ui-kit/components/sidebar/sidebar"), { fallback: <SidebarFallback/> });
const Notifications = loadable(() => import("@/ui-kit/components/notifications/notifications"));

//TODO implement one type
//TODO load fonts first
type MenuElements = "monitoring" | "domains" | "competitions" | "seoAudit" | "tools" | "reports" | "help";

const themesMap = {
  light,
}

const DEFAULT_MENU_ITEM = "monitoring";

const App: FC = (): JSX.Element => {
  const isAuth = useRecoilValue(authSelector);
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.light);
  const theme = themesMap[currentTheme];

  useEffect(() => {
    if (localStorage.getItem(currentMenuItemLS)) {
      setCurrentMenuItem(localStorage.getItem(currentMenuItemLS) as MenuElements);
      return;
    }
    setCurrentMenuItem(DEFAULT_MENU_ITEM);
  }, [setCurrentMenuItem]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS/>
      <BrowserRouter>
        <Notifications/>
        <Sidebar/>
        <BodyWrapper>
          <Routes>
            <Route path={ROOT_PAGE} element={isAuth
              ? <MonitorChangesPageRouter/>
              : <Navigate to={SIGN_IN_PAGE}/>
            }/>
            <Route path={SIGN_IN_PAGE} element={isAuth
              ? <Navigate to={ROOT_PAGE}/>
              : <SignInPageRouter/>
            }/>
            <Route path={SIGN_UP_PAGE} element={isAuth
              ? <Navigate to={ROOT_PAGE}/>
              : <SignUpPageRouter/>
            }/>
            <Route path={RESET_PASSWORD_PAGE} element={isAuth
              ? <Navigate to={ROOT_PAGE}/>
              : <ResetPasswordPageRouter/>
            }/>
            <Route path={CHANGE_PASSWORD_PAGE} element={isAuth
              ? <Navigate to={ROOT_PAGE}/>
              : <ChangePasswordPageRouter/>
            }/>
            <Route path={ADD_DOMAIN_PAGE} element={isAuth
              ? <AddDomainPageRouter/>
              : <Navigate to={ROOT_PAGE}/>
            }/>
          </Routes>
        </BodyWrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
