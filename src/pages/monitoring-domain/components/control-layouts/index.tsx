import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { layoutTypeState } from "@/entity/atoms/monitoring-domain/layout-type";
import { PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import RadioGroup from "@/ui-kit/components/controls/radio-group";
import Radio from "@/ui-kit/components/controls/radio";

import { LayoutTypes } from "@/entity/types/monitoring-domain";


const ControlLayouts: FC = memo(() => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useRecoilState<LayoutTypes>(layoutTypeState);

  const onChangeRadioHandler = useCallback(
    (value: LayoutTypes) => setSelectedType(value),
    [],
  );

  const getLabelColor = (selectedType: LayoutTypes, currentType: LayoutTypes): Color => {
    if (selectedType === currentType) {
      return PRIMARY_60;
    }

    return NEUTRAL_60;
  };

  return (
    <RadioGroup gap={40}>
      <Radio
        label={capitalizeFirstLetter(t("list_view"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.ListView)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.ListView}
        checked={selectedType === LayoutTypes.ListView}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
      <Radio
        label={capitalizeFirstLetter(t("url_view"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.URLView)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.URLView}
        checked={selectedType === LayoutTypes.URLView}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
      <Radio
        label={capitalizeFirstLetter(t("visual_report"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.VisualReport)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.VisualReport}
        checked={selectedType === LayoutTypes.VisualReport}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
      <Radio
        label={capitalizeFirstLetter(t("crawl_history"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.CrawlHistory)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.CrawlHistory}
        checked={selectedType === LayoutTypes.CrawlHistory}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
    </RadioGroup>
  )
});

export default ControlLayouts;