import { FC, Fragment, memo, useCallback, useMemo } from "react";
import { SelectOption } from "@/ui-kit/types/select";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { isLockedSliderSelector } from "@/entity/selectors/monitoring/slider";
import { NEUTRAL_90 } from "@/ui-kit/constants/colors";
import SwiperPrevButton from "@/pages/monitoring/components/swiper-prev-button";
import SwiperNextButton from "@/pages/monitoring/components/swiper-next-button";
import Dropdown from "@/ui-kit/components/controls/dropdown";

import { Row } from "@/global.css";


const SortBy: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const isLockedSlider = useRecoilValue(isLockedSliderSelector);

  const sortByElements = useMemo(
    () => [{ value: "number_of_changes", label: <div>{t("number_of_changes")}</div> }],
    [t]
  );

  const onChangeSelect = useCallback(
    (option: SelectOption) => console.log(option, 'option'),
    []
  );

  return (
    <Row justify={"flex-end"} align={"center"} gap={15}>
      <Dropdown
        color={"ghost"}
        options={sortByElements}
        label={`${capitalizeFirstLetter(t("sort_by"))}:`}
        labelColor={NEUTRAL_90}
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
    </Row>
  )
});

export default SortBy;