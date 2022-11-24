import { MATCH_ROUTES } from "@/constants/routes";
import { matchRoutes } from "react-router-dom";


const routes = MATCH_ROUTES.map((element) => ({ path: element }));

const getRoutesElement = (location: Location): string => {
  const routeMatch = matchRoutes(routes, location)

  if (routeMatch?.length) {
    return routeMatch[0].route.path
  }

  return location.pathname;
};

export const getRoutesMatch = (location: any, routes: string[]): boolean => {
  const element = getRoutesElement(location);
  return routes.includes(element);
}