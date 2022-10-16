import { FC, Fragment, memo, useCallback, useMemo, useState } from 'react';
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { isLockedSliderSelector } from "@/entity/selectors/monitor-changes/slider";
import { MISTY_ROSE } from '@/ui-kit/constants/colors';
import Switcher from "@/ui-kit/components/inputs/switcher/switcher";
import Dropdown from "@/ui-kit/components/dropdowns/dropdown/dropdown";
import SwiperPrevButton from "@/pages/monitor-changes/components/swiper-prev-button/swiper-prev-button";
import SwiperNextButton from "@/pages/monitor-changes/components/swiper-next-button/swiper-next-button";

import { CardsSectionHeaderWrapper, HeaderSideWrapper } from '../../../../styled';


type SelectOption = { value: string | number; label: string | number };

const RedAlertsOnlySwitcher: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [isCheckedRedAlertsOnly, setIsCheckedRedAlertsOnly] = useState(false);

  const toggleRedAlertsOnly = useCallback(
    () => setIsCheckedRedAlertsOnly(!isCheckedRedAlertsOnly),
    [isCheckedRedAlertsOnly]
  );

  return (
    <Switcher
      isChecked={isCheckedRedAlertsOnly}
      onChange={toggleRedAlertsOnly}
      backgroundColor={MISTY_ROSE}
      label={capitalizeFirstLetter(t("red_alerts_only"))}
      labelColor={"subtly"}
      tooltip={<>Tooltip text</>}
    />
  )
});

const LeftSide: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  const changesSinceElements = useMemo(
    () => [{ value: "last_visit", label: t("last_visit") }],
    [t]
  );

  const onChangeSelect = useCallback(
    (option: SelectOption) => console.log(option, 'option'),
    []
  );

  return (
    <HeaderSideWrapper>
      <Dropdown
        color={"ghost"}
        options={changesSinceElements}
        label={capitalizeFirstLetter(t("changes_since"))}
        onChange={onChangeSelect}
      />
      <RedAlertsOnlySwitcher/>
    </HeaderSideWrapper>
  )
});

const RightSide: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const isLockedSlider = useRecoilValue(isLockedSliderSelector);

  const sortByElements = useMemo(
    () => [{ value: "number_of_changes", label: t("number_of_changes") }],
    [t]
  );

  const onChangeSelect = useCallback(
    (option: SelectOption) => console.log(option, 'option'),
    []
  );

  return (
    <HeaderSideWrapper>
      <Dropdown
        color={"ghost"}
        options={sortByElements}
        label={`${capitalizeFirstLetter(t("sort_by"))}:`}
        labelColor={"subtly"}
        onChange={onChangeSelect}
      />
      {!isLockedSlider && (
        <Fragment>
          <SwiperPrevButton>
            {t("prev")}
          </SwiperPrevButton>
          <SwiperNextButton>
            {t("next")}
          </SwiperNextButton>
        </Fragment>
      )}
    </HeaderSideWrapper>
  )
});

const CardsSectionHeader: FC = memo((): JSX.Element => {
  return (
    <CardsSectionHeaderWrapper>
      <LeftSide/>
      <RightSide/>
    </CardsSectionHeaderWrapper>
  );
});

export default CardsSectionHeader;
