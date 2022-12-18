import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { selectedTableTypeState } from "@/entity/atoms/manage/table-type";
import { PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import RadioGroup from "@/ui-kit/components/controls/radio-group";
import Radio from "@/ui-kit/components/controls/radio";

import { LayoutTypes } from "@/entity/types/manage";


const Radios: FC = memo(() => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useRecoilState<LayoutTypes>(selectedTableTypeState);

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
        name={"domains"}
        label={capitalizeFirstLetter(t("domains_and_urls"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.DomainsUrls)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.DomainsUrls}
        checked={selectedType === LayoutTypes.DomainsUrls}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
      <Radio
        name={"domains"}
        label={capitalizeFirstLetter(t("keywords"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.Keywords)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.Keywords}
        checked={selectedType === LayoutTypes.Keywords}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
      <Radio
        name={"domains"}
        label={capitalizeFirstLetter(t("redirect_testing"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.RedirectTesting)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={LayoutTypes.RedirectTesting}
        checked={selectedType === LayoutTypes.RedirectTesting}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
    </RadioGroup>
  )
});

export default Radios;