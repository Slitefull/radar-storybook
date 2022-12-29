import { FC, memo, ReactNode } from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import { MANAGE_PAGE, MATCH_ROUTES, MONITORING_PAGE } from "@/constants/routes";
import loadable from "@loadable/component";

import { SBottomBar } from "./styled";


const MonitoringLayout = loadable(() => import("./layouts/monitoring"));
const ManageLayout = loadable(() => import("./layouts/manage"));

const LayoutsRecord: Record<string, ReactNode> = {
  [MONITORING_PAGE]: <MonitoringLayout/>,
  [MANAGE_PAGE]: <ManageLayout/>,
};

const routes = MATCH_ROUTES.map((route) => ({ path: route }));

const BottomBar: FC = memo((): JSX.Element => {
  const location = useLocation()
  const routeMatch = matchRoutes(routes, location)

  const getElement = (): string => {
    if (routeMatch?.length) {
      return routeMatch[0].route.path
    }
    return location.pathname;
  }

  return (
    <SBottomBar>
      {LayoutsRecord[getElement()]}
    </SBottomBar>
  );
});

export default BottomBar;
