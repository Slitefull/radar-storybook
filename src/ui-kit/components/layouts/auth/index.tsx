import { FC, Fragment, memo } from 'react';
import { Outlet } from "react-router-dom";


const AuthLayout: FC = memo((): JSX.Element => {
  return (
    <Fragment>
      <Outlet/>
    </Fragment>
  );
});

export default AuthLayout;