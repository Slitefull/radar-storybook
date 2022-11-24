import { FC, memo, useCallback } from 'react';
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PLUMP_PURPLE, RAISIN_BLACK, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import { selectedLayoutState } from "@/entity/atoms/manage-domain/layout-type";
import { MONITOR_CHANGES_PAGE } from "@/constants/routes";
import Arrow from "@/ui-kit/customized-icons/arrow";
import ColoredText from "@/ui-kit/components/text/colored";
import RadioGroup from "@/ui-kit/components/inputs/radio-group";
import Radio from "@/ui-kit/components/inputs/radio";
import ExternalLinkIcon from "@/ui-kit/customized-icons/external-link";
import SettingsIcon from "@/ui-kit/customized-icons/settings";

import { Row } from '@/global.css';


enum LayoutTypes {
  settings = "domains",
  monitoredURLs = "keywords",
}

const Options: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useRecoilState<LayoutTypes>(selectedLayoutState);

  const getLabelColor = (selectedType: LayoutTypes, currentType: LayoutTypes): Color => {
    if (selectedType === currentType) {
      return PLUMP_PURPLE;
    }

    return ROCKET_METALLIC;
  };

  const onChangeRadioHandler = useCallback(
    (value: LayoutTypes) => setSelectedType(value),
    [],
  );

  return (
    <RadioGroup gap={40}>
      <Radio
        name={"type"}
        label={capitalizeFirstLetter(t("settings"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.settings)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={"domains"}
        checked={selectedType === LayoutTypes.settings}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
      <Radio
        name={"type"}
        label={capitalizeFirstLetter(t("monitored_urls"))}
        labelColor={getLabelColor(selectedType, LayoutTypes.monitoredURLs)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={"keywords"}
        checked={selectedType === LayoutTypes.monitoredURLs}
        onChange={(event) => onChangeRadioHandler(event.target.value as LayoutTypes)}
      />
    </RadioGroup>
  )
});

const Breadcrumb: FC = memo((): JSX.Element => {
  const navigate = useNavigate();

  const onBackHandler = useCallback(() => navigate(-1), [navigate]);
  const onOpenLinkHandler = useCallback(() => navigate(MONITOR_CHANGES_PAGE), [navigate]);

  return (
    <Row justify={"space-between"} width={"100%"}>
      <Row gap={15} align={"center"}>
        <Row
          gap={10}
          onClick={onBackHandler}
          align={"center"}
          cursor={"pointer"}
        >
          <Arrow
            rotation={"left"}
            color={PLUMP_PURPLE}
            size={15}
          />
          <ColoredText
            type={"secondary"}
            color={RAISIN_BLACK}
            weight={"bold"}
            size={"big"}
          >
            yahoo.com
          </ColoredText>
        </Row>
        <Row gap={5} align={"center"}>
          <ExternalLinkIcon
            size={15}
            onClick={onOpenLinkHandler}
          />
          <SettingsIcon
            size={12}
            onClick={onOpenLinkHandler}
            hoverColor={PLUMP_PURPLE}
          />
        </Row>
      </Row>
      <Options/>
    </Row>
  );
});

export default Breadcrumb;