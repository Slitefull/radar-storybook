import { FC, Fragment, memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "@/ui-kit/components/dropdowns/dropdown/dropdown";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle/plus-circle";
import SettingsIcon from "@/ui-kit/customized-icons/settings/settings";
import BellIcon from "@/ui-kit/customized-icons/bell/bell";

import { HeaderTitle, HeaderWrapper, LeftSide, RightSide, Username } from "./styled";
import Link from "../buttons/link/link";


type SelectOption = { value: string | number; label: string | number };

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
    () => [{ value: 'all_domains', label: "All domains" }],
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

  const onChangeSelect = useCallback(
    (option: SelectOption) => console.log(option, 'option'),
    []
  );

  return (
    <HeaderWrapper>
      <LeftSide>
        <HeaderTitle>Monitor changes</HeaderTitle>
        <Dropdown
          options={dropdownData}
          onChange={onChangeSelect}
        />
        <Link
          color={"text"}
          icon={<PlusCircleIcon size={25}/>}
          onClick={() => console.log("qwe")}
        >
          Add domains
        </Link>
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
    </HeaderWrapper>
  );
});

export default Header;
