import { FC, Fragment, lazy, memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderTitle, HeaderWrapper, LeftSide, RightSide, Username } from "./styled";


const Dropdown = lazy(() => import("../dropdowns/dropdown/dropdown"));
const Link = lazy(() => import("../links/link/link"));
const PlusCircleIcon = lazy(() => import("@/ui-kit/customized-icons/plus-circle/plus-circle"));
const SettingsIcon = lazy(() => import("@/ui-kit/customized-icons/settings/settings"));
const BellIcon = lazy(() => import("@/ui-kit/customized-icons/bell/bell"));

const UserProfile: FC = memo((): JSX.Element => {
  const navigate = useNavigate();

  const onClickUserHandler = useCallback(
    () => navigate('/'),
    [navigate]
  );

  return (
    <Fragment>
      <Username onClick={onClickUserHandler}>Angie Smith</Username>
    </Fragment>
  )
});

const Header: FC = memo((): JSX.Element => {
  const navigate = useNavigate();

  const dropdownData = useMemo(
    () => [{ key: 'all_domains', label: "All domains" }],
    []
  );

  const onClickSettingsHandler = useCallback(
    () => navigate('/'),
    [navigate]
  );

  const onClickBellHandler = useCallback(
    () => navigate('/'),
    [navigate]
  );

  return (
    <HeaderWrapper>
      <LeftSide>
        <HeaderTitle>Monitor changes</HeaderTitle>
        <Dropdown elements={dropdownData}/>
        <Link
          color={"text"}
          redirectTo={"/"}
          icon={<PlusCircleIcon size={20}/>}
        >
          Add domains
        </Link>
      </LeftSide>

      <RightSide>
        <SettingsIcon onClick={onClickSettingsHandler}/>
        <BellIcon
          itemsCount={20}
          onClick={onClickBellHandler}
        />
        <UserProfile/>
      </RightSide>
    </HeaderWrapper>
  );
});

export default Header;
