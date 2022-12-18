import { MONITORING_PAGE, SIGN_IN_PAGE } from "@/constants/routes";
import { useAuth } from "@/ui-kit/hooks/useAuth";
import { Navigate } from "react-router-dom";


const NotFoundRoute = () => {
  const { isAuth } = useAuth();

  return (
    isAuth
      ? <Navigate to={MONITORING_PAGE} replace/>
      : <Navigate to={SIGN_IN_PAGE} replace/>
  )
};

export default NotFoundRoute;