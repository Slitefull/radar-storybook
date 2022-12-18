import { FC, Fragment, memo } from 'react';
import { Outlet } from "react-router-dom";
import PrivateRoute from "@/router/private-route";
import loadable from "@loadable/component";
import PageContainer from "@/ui-kit/components/containers/simple";
import MonitorTableFallback from './components/table/fallback';
import Header from "@/ui-kit/components/generals/header";
import Sidebar from '@/ui-kit/components/generals/sidebar';

import { Column } from "@/global.css";


const MonitorTable = loadable(() => import("./components/table"), {
  fallback: <MonitorTableFallback/>
});

const MonitoringLayout: FC = memo((): JSX.Element => {
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
      </Fragment>
    </PrivateRoute>
  );
});

export default MonitoringLayout;
