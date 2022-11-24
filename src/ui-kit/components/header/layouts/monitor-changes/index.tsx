import { FC, Fragment, memo, useCallback, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { ADD_DOMAIN_PAGE } from "@/constants/routes";
import Dropdown from "@/ui-kit/components/dropdowns/dropdown";
import ButtonLink from "@/ui-kit/components/buttons/link";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle";
import SettingsIcon from "@/ui-kit/customized-icons/settings";
import BellIcon from "@/ui-kit/customized-icons/bell";
import UserProfile from "@/ui-kit/components/header/components/user-profile";

import { HeaderTitle, LeftSide, RightSide } from "@/ui-kit/components/header/styled";


type SelectOption = { value: string | number; label: string | number };

const MonitorChangesLayout: FC = memo((): JSX.Element => {
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
    <Fragment>
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
    </Fragment>
  );
});

export default MonitorChangesLayout;