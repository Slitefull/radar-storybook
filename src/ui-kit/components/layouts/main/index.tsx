import { FC, Fragment, memo } from 'react';
import { useRecoilValue } from "recoil";
import { Outlet } from 'react-router-dom';
import PrivateRoute from "@/router/private-route";
import { selectedRowsSelector } from "@/entity/selectors/monitoring/selected-rows";
import loadable from "@loadable/component";
import Header from "@/ui-kit/components/generals/header";
import SidebarFallback from "@/ui-kit/components/generals/sidebar/fallback";
import BottomBar from "@/ui-kit/components/generals/bottom-bar";


const Sidebar = loadable(() => import("@/ui-kit/components/generals/sidebar"), {
  fallback: <SidebarFallback/>
});

const MainLayout: FC = memo((): JSX.Element => {
  const selectedRows = useRecoilValue(selectedRowsSelector);

  return (
    <PrivateRoute>
      <Fragment>
        <Sidebar/>
        <Fragment>
          <Header/>
          <Outlet/>
        </Fragment>
        {selectedRows.length ? <BottomBar/> : null}
      </Fragment>
    </PrivateRoute>
  );
});

export default MainLayout;