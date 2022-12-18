import { FC, memo, useCallback } from 'react';
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import { selectedLayoutState } from "@/entity/atoms/manage-domain/layout-type";
import RadioGroup from "@/ui-kit/components/controls/radio-group";
import Radio from "@/ui-kit/components/controls/radio";

import { LayoutTypes } from "@/entity/types/manage-domain";


const Options: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useRecoilState<LayoutTypes>(selectedLayoutState);

  const getLabelColor = (selectedType: LayoutTypes, currentType: LayoutTypes): Color => {
    if (selectedType === currentType) {
      return PRIMARY_60;
    }

    return NEUTRAL_60;
  };

  const onChangeRadioHandler = useCallback(
    (value: LayoutTypes) => setSelectedType(value),
    [],
  );

  return (
    <RadioGroup gap={40}>
      <Radio
        label={capitalizeFirstLetter(t("settings"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.Settings)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.Settings}
        checked={selectedType === LayoutTypes.Settings}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
      <Radio
        label={capitalizeFirstLetter(t("monitored_urls"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.MonitoredURLs)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.MonitoredURLs}
        checked={selectedType === LayoutTypes.MonitoredURLs}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
    </RadioGroup>
  )
});

export default Options;