import { FC, useState } from "react";
import loadable from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light } from "@/ui-kit/themes/light/light";
import { Themes } from "@/constants/themes";
import Router from "@/router";
import "../infrastructure/i18n";

import GlobalCSS from "@/global.css";


const Notifications = loadable(() => import("@/ui-kit/components/notifications"));

const themesMap = {
  light,
}

const App: FC = (): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.light);
  const theme = themesMap[currentTheme];

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
