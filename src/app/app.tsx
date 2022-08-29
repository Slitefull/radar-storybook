import { FC, lazy, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { light } from "@/ui-kit/themes/light/light";
import { Themes } from "@/constants/themes";
import { currentMenuItemLS } from "@/constants/local-storage";
import { authSelector } from "@/entity/selectors/auth";
import { currentMenuItemState } from "@/entity/atoms/currentMenuItem";
import { CHANGE_PASSWORD_PAGE, RESET_PASSWORD_PAGE, ROOT_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from "@/constants/routes";
import "../infrastructure/i18n";

import GlobalCSS, { BodyWrapper } from "@/global.css";


const MonitorChangesPageRouter = lazy(() => import("@/pages/monitor-changes/monitor-changes"));
const SignInPageRouter = lazy(() => import("@/pages/sign-in/sign-in"));
const SignUpPageRouter = lazy(() => import("@/pages/sign-up/sign-up"));
const ChangePasswordPageRouter = lazy(() => import("@/pages/change-password/change-password"));
const ResetPasswordPageRouter = lazy(() => import("@/pages/reset-password/reset-password"));

const Header = lazy(() => import("@/ui-kit/components/header/header"));
const Sidebar = lazy(() => import("@/ui-kit/components/sidebar/sidebar"));
const Notifications = lazy(() => import("@/ui-kit/components/notifications/notifications"));

//TODO implement one type
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
          <Header/>
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
          </Routes>
        </BodyWrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
