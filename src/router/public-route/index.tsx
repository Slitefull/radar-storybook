import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/ui-kit/hooks/useAuth";
import { PUBLIC_ROUTES } from "@/constants/routes";


const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();
  const { pathname } = useLocation();

  if (isAuth && PUBLIC_ROUTES.includes(pathname)) {
    return <Navigate to={"/"} replace/>;
  }

  return children;
};

export default PublicRoute;