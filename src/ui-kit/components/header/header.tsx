import { FC, Fragment, memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_DOMAIN_PAGE } from "@/constants/routes";
import Dropdown from "@/ui-kit/components/dropdowns/dropdown/dropdown";
import ButtonLink from "@/ui-kit/components/buttons/link/link";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle/plus-circle";
import SettingsIcon from "@/ui-kit/customized-icons/settings/settings";
import BellIcon from "@/ui-kit/customized-icons/bell/bell";

import { HeaderTitle, HeaderWrapper, LeftSide, RightSide, Username } from "./styled";


type SelectOption = { value: string | number; label: string | number };

const UserProfile: FC = memo((): JSX.Element => {
  const navigate = useNavigate();

  const onClickUserHandler = useCallback(
    () => navigate("/"),
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
    () => [{ value: "all_domains", label: "All domains" }],
    []
  );

  const onClickSettingsHandler = useCallback(
    () => navigate("/"),
    [navigate]
  );

  const onClickBellHandler = useCallback(
    () => navigate("/"),
    [navigate]
  );

  const onChangeSelect = useCallback(
    (option: SelectOption) => console.log(option, "option"),
    []
  );

  const onAddDomainHandler = useCallback(
    () => navigate(ADD_DOMAIN_PAGE),
    [navigate]
  );

  return (
    <HeaderWrapper>
      <LeftSide>
        <HeaderTitle>Monitor changes</HeaderTitle>
        <Dropdown
          options={dropdownData}
          onChange={onChangeSelect}
        />
        <ButtonLink
          color={"text"}
          onClick={onAddDomainHandler}
          icon={<PlusCircleIcon size={25}/>}
        >
          Add domains
        </ButtonLink>
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
