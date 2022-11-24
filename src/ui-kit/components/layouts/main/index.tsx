import { FC, Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import loadable from "@loadable/component";
import Header from "@/ui-kit/components/header";
import SidebarFallback from "@/ui-kit/components/sidebar/fallback";
import PrivateRoute from "@/router/private-route";


const Sidebar = loadable(() => import("@/ui-kit/components/sidebar"), { fallback: <SidebarFallback/> });

const MainLayout: FC = memo((): JSX.Element => {
  return (
    <PrivateRoute>
      <Fragment>
        <Sidebar/>
        <Fragment>
          <Header/>
          <Outlet/>
        </Fragment>
      </Fragment>
    </PrivateRoute>
  );
});

export default MainLayout;