import { FC, useEffect, useState } from "react";
import loadable from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSetRecoilState } from "recoil";
import { light } from "@/ui-kit/themes/light/light";
import { Themes } from "@/constants/themes";
import { currentMenuItemLS } from "@/constants/local-storage";
import { currentMenuItemState } from "@/entity/atoms/currentMenuItem";
import Router from "@/app/router";
import "../infrastructure/i18n";

import GlobalCSS from "@/global.css";

//TODO implement one type
type MenuElements = "monitoring" | "manage" | "competitions" | "seoAudit" | "tools" | "reports" | "help";

const Notifications = loadable(() => import("@/ui-kit/components/notifications/notifications"));

const themesMap = {
  light,
}

const DEFAULT_MENU_ITEM = "monitoring";

const App: FC = (): JSX.Element => {
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
      <Notifications/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
