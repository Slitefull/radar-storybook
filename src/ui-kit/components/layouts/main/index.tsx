import { FC, Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import loadable from "@loadable/component";
import Header from "@/ui-kit/components/header/header";
import SidebarFallback from "@/ui-kit/components/sidebar/fallback/fallback";


const Sidebar = loadable(() => import("@/ui-kit/components/sidebar/sidebar"), { fallback: <SidebarFallback/> });

const MainLayout: FC = memo((): JSX.Element => {
  return (
    <Fragment>
      <Sidebar/>
      <Fragment>
        <Header/>
        <Outlet/>
      </Fragment>
    </Fragment>
  );
});

export default MainLayout;