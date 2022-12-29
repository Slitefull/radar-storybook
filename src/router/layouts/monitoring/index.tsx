import { FC, Fragment, memo } from 'react';
import { useRecoilValue } from "recoil";
import { Outlet } from "react-router-dom";
import PrivateRoute from "@/router/private-route";
import { selectedRowsSelector } from "@/entity/selectors/monitoring/selected-rows";
import loadable from "@loadable/component";
import SidebarFallback from "@/ui-kit/components/generals/sidebar/fallback";
import PageContainer from "@/ui-kit/components/containers/simple";
import MonitorTableFallback from './components/table/fallback';
import BottomBar from "@/ui-kit/components/generals/bottom-bar";
import Header from "@/ui-kit/components/generals/header";

import { Column } from "@/global.css";


const Sidebar = loadable(() => import("@/ui-kit/components/generals/sidebar"), {
  fallback: <SidebarFallback/>
});

const MonitorTable = loadable(() => import("./components/table"), {
  fallback: <MonitorTableFallback/>
});

const MonitoringLayout: FC = memo((): JSX.Element => {
  const selectedRows = useRecoilValue(selectedRowsSelector);

  return (
    <PrivateRoute>
      <Fragment>
        <Sidebar/>
        <Fragment>
          <Header/>
          <PageContainer>
            <Column gap={50}>
              <Outlet/>
              <MonitorTable/>
            </Column>
          </PageContainer>
        </Fragment>
        {selectedRows.length ? <BottomBar/> : null}
      </Fragment>
    </PrivateRoute>
  );
});

export default MonitoringLayout;
