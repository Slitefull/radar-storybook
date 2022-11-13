import { FC, memo, ReactNode } from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import { MANAGE_DOMAIN_PAGE, MANAGE_PAGE, MONITOR_CHANGES_PAGE } from "@/constants/routes";
import MonitorChangesLayout from "./layouts/monitor-changes";
import ManageLayout from "./layouts/manage";
import ManageDomainLayout from "./layouts/manage-domain";

import { HeaderWrapper } from "./styled";


const LayoutsRecord: Record<string, ReactNode> = {
  [MONITOR_CHANGES_PAGE]: <MonitorChangesLayout/>,
  [MANAGE_PAGE]: <ManageLayout/>,
  [MANAGE_DOMAIN_PAGE]: <ManageDomainLayout/>,
};

const routes = [{ path: MANAGE_DOMAIN_PAGE }]

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
