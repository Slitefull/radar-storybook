import { FC, Fragment, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@/ui-kit/customized-icons/settings";
import BellIcon from "@/ui-kit/customized-icons/bell";
import UserProfile from '../../components/user-profile';

import { HeaderTitle, LeftSide, RightSide } from "@/ui-kit/components/header/styled";


const ManageDomainLayout: FC = memo((): JSX.Element => {
  const navigate = useNavigate();

  const onClickSettingsHandler = useCallback(
    () => navigate("/"),
    [navigate]
  );

  const onClickBellHandler = useCallback(
    () => navigate("/"),
    [navigate]
  );

  return (
    <Fragment>
      <LeftSide>
        <HeaderTitle>Manage</HeaderTitle>
      </LeftSide>

      <RightSide>
        <SettingsIcon
          size={25}
          onClick={onClickSettingsHandler}
        />
        <BellIcon
          size={25}
          itemsCount={20}
          onClick={onClickBellHandler}
        />
        <UserProfile/>
      </RightSide>
    </Fragment>
  );
});

export default ManageDomainLayout;