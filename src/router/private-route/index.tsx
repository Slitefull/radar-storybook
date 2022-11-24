import { Navigate } from "react-router-dom";
import { SIGN_IN_PAGE } from "@/constants/routes";
import { useAuth } from "@/ui-kit/hooks/useAuth";


const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to={SIGN_IN_PAGE} replace/>;
};

export default PrivateRoute;