import { FC, Fragment, memo, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Dropdown from "@/ui-kit/components/controls/dropdown";
import SettingsIcon from "@/ui-kit/customized-icons/settings";
import BellIcon from "@/ui-kit/customized-icons/bell";
import UserProfile from "@/ui-kit/components/generals/header/components/user-profile";

import { SelectOption } from "@/ui-kit/types/select";
import { HeaderTitle, LeftSide, RightSide } from "../../styled";


const MonitoringLayout: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
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

  return (
    <Fragment>
      <LeftSide>
        <HeaderTitle>{capitalizeFirstLetter(t("monitoring"))}</HeaderTitle>
        <Dropdown
          options={dropdownData}
          onChange={onChangeSelect}
        />
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

export default MonitoringLayout;