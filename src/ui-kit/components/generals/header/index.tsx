import { FC, memo, ReactNode } from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import {
  MANAGE_DOMAIN_PAGE,
  MANAGE_PAGE,
  MATCH_ROUTES,
  MONITORING_DOMAIN_PAGE,
  MONITORING_PAGE
} from "@/constants/routes";
import loadable from "@loadable/component";
import ManageLayoutFallback from "./layouts/manage/fallback";
import ManageDomainLayoutFallback from "./layouts/manage-domain/fallback";
import MonitoringLayoutFallback from "./layouts/monitoring/fallback";

import { HeaderWrapper } from "./styled";


const MonitoringLayout = loadable(() => import("./layouts/monitoring"), {
  fallback: <MonitoringLayoutFallback/>
});

const MonitoringDomainLayout = loadable(() => import("./layouts/monitoring-domain"), {
  fallback: <MonitoringLayoutFallback/>
});

const ManageLayout = loadable(() => import("./layouts/manage"), {
  fallback: <ManageDomainLayoutFallback/>
});

const ManageDomainLayout = loadable(() => import("./layouts/manage-domain"), {
  fallback: <ManageLayoutFallback/>
});

const LayoutsRecord: Record<string, ReactNode> = {
  [MONITORING_PAGE]: <MonitoringLayout/>,
  [MONITORING_DOMAIN_PAGE]: <MonitoringDomainLayout/>,
  [MANAGE_PAGE]: <ManageLayout/>,
  [MANAGE_DOMAIN_PAGE]: <ManageDomainLayout/>,
};

const routes = MATCH_ROUTES.map((route) => ({ path: route }));

const Header: FC = memo((): JSX.Element => {
  const location = useLocation()
  const routeMatch = matchRoutes(routes, location)

  const getElement = (): string => {
    if (routeMatch?.length) {
      return routeMatch[0].route.path
    }
    return location.pathname;
  }

  return (
    <HeaderWrapper>
      {LayoutsRecord[getElement()]}
    </HeaderWrapper>
  );
});

export default Header;
