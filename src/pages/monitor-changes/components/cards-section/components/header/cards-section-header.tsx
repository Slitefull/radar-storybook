import { FC, Fragment, lazy, memo, useCallback, useMemo, useState } from 'react';
import { useRecoilValue } from "recoil";
import { isLockedSliderSelector } from "@/entity/selectors/monitor-changes/slider";
import { MISTY_ROSE, PLUMP_PURPLE } from '@/ui-kit/constants/colors';

import { CardsSectionHeaderWrapper, HeaderSideWrapper } from "./styled";


const ColoredText = lazy(() => import("@/ui-kit/components/text/colored/colored"));
const Dropdown = lazy(() => import("@/ui-kit/components/dropdowns/dropdown/dropdown"));
const HelpCircle = lazy(() => import("@/ui-kit/customized-icons/help-circle/help-circle"));
const Switcher = lazy(() => import("@/ui-kit/components/inputs/switcher/switcher"));
const SwiperPrevButton = lazy(() => import("../../../swiper-prev-button/swiper-prev-button"));
const SwiperNextButton = lazy(() => import("../../../swiper-next-button/swiper-next-button"));

const RedAlertsOnlySwitcher: FC = memo((): JSX.Element => {
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
      label={"Red Alerts only"}
    />
  )
});

const LeftSide: FC = memo((): JSX.Element => {
  const changesSinceElements = useMemo(
    () => [{ key: "last_visit", label: "last visit" }],
    []
  );

  return (
    <HeaderSideWrapper>
      <ColoredText
        color={PLUMP_PURPLE}
        weight={"bold"}
      >
        Changes since
      </ColoredText>

      <Dropdown
        color={"ghost"}
        elements={changesSinceElements}
      />
      <RedAlertsOnlySwitcher/>
      <HelpCircle/>
    </HeaderSideWrapper>
  )
});

const RightSide: FC = memo((): JSX.Element => {
  const isLockedSlider = useRecoilValue(isLockedSliderSelector);

  const sortByElements = useMemo(
    () => [{ key: "number_of_changes", label: "number of changes" }],
    []
  );

  return (
    <HeaderSideWrapper>
      <Dropdown
        color={"ghost"}
        elements={sortByElements}
        label={"Sort by:"}
      />
      {!isLockedSlider && (
        <Fragment>
          <SwiperPrevButton>Prev</SwiperPrevButton>
          <SwiperNextButton>Next</SwiperNextButton>
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
