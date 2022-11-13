import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { EBONY, PLUMP_PURPLE, RAISIN_BLACK, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import ColoredText from "@/ui-kit/components/text/colored/colored";
import Input from "@/ui-kit/components/inputs/text/text";
import Dropdown from "@/ui-kit/components/dropdowns/with-types/with-types";
import BorderedLayout from "@/ui-kit/components/layouts/bordered/bordered";
import PageContainer from "@/ui-kit/components/page-container/simple/simple";
import Breadcrumb from "./components/breadcrumb";
import RadioGroup from "@/ui-kit/components/inputs/radio-group/radio-group";
import Radio from "@/ui-kit/components/inputs/radio/radio";

import { Column, Row } from '@/global.css';


enum RadioTypes {
  settings = "domains",
  monitoredURLs = "keywords",
}

const ManageDomain: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<RadioTypes>(RadioTypes.settings);

  const getLabelColor = (selectedType: RadioTypes, currentType: RadioTypes): Color => {
    if (selectedType === currentType) {
      return PLUMP_PURPLE;
    }

    return ROCKET_METALLIC;
  };

  const onChangeRadioHandler = useCallback(
    (value: RadioTypes) => setSelectedType(value),
    [],
  );

  const onChangeDomainTypeHandler = useCallback(
    () => console.log("change"),
    []
  );

  const onChangeInputHandler = useCallback(
    () => console.log("change"),
    []
  );

  const domainTypeOptions = [
    { value: "my_domain", label: "my domain" },
    { value: "my_domain_2", label: "my domain" },
    { value: "my_domain_3", label: "my domain" },
  ];

  return (
    <PageContainer>
      <Column width={"100%"}>
        <Breadcrumb/>
        <Column
          margin={"50px 0 0 0"}
          width={"100%"}
        >
          <RadioGroup gap={40}>
            <Radio
              name={"type"}
              label={capitalizeFirstLetter(t("settings"))}
              labelColor={getLabelColor(selectedType, RadioTypes.settings)}
              labelSize={"big"}
              labelPosition={"right"}
              labelWeight={"bold"}
              value={"domains"}
              checked={selectedType === RadioTypes.settings}
              onChange={(event) => onChangeRadioHandler(event.target.value as RadioTypes)}
            />
            <Radio
              name={"type"}
              label={capitalizeFirstLetter(t("monitored_urls"))}
              labelColor={getLabelColor(selectedType, RadioTypes.monitoredURLs)}
              labelSize={"big"}
              labelPosition={"right"}
              labelWeight={"bold"}
              value={"keywords"}
              checked={selectedType === RadioTypes.monitoredURLs}
              onChange={(event) => onChangeRadioHandler(event.target.value as RadioTypes)}
            />
          </RadioGroup>

          <BorderedLayout width={"100%"}>
            <Column
              width={"80%"}
              margin={"auto"}
            >
              <ColoredText
                color={RAISIN_BLACK}
                weight={"bold"}
                size={"big"}
              >
                Settings & customizations
              </ColoredText>

              <Row
                justify={"space-between"}
                width={"100%"}
                gap={90}
              >
                <Column width={"100%"} gap={30}>
                  <Dropdown
                    types={[]}
                    label={capitalizeFirstLetter(t("domain_type"))}
                    labelColor={EBONY}
                    labelPosition={"top"}
                    options={domainTypeOptions}
                    onChange={onChangeDomainTypeHandler}
                    width={"100%"}
                  />
                  <Input
                    label={capitalizeFirstLetter(t("domain"))}
                    labelColor={EBONY}
                    onChange={onChangeInputHandler}
                    placeholder={"e.g. lorem ipsum"}
                    width={"100%"}
                    full
                  />
                  <Dropdown
                    types={[]}
                    label={capitalizeFirstLetter(t("groups"))}
                    labelColor={EBONY}
                    labelPosition={"top"}
                    options={domainTypeOptions}
                    onChange={onChangeDomainTypeHandler}
                    width={"100%"}
                  />
                </Column>

                <Column width={"100%"} gap={30}>
                  <Dropdown
                    types={[]}
                    label={capitalizeFirstLetter(t("display_name"))}
                    labelColor={EBONY}
                    labelPosition={"top"}
                    options={domainTypeOptions}
                    onChange={onChangeDomainTypeHandler}
                    width={"100%"}
                  />
                  <Dropdown
                    types={["multi"]}
                    label={capitalizeFirstLetter(t("branded_keywords"))}
                    labelColor={EBONY}
                    labelPosition={"top"}
                    options={domainTypeOptions}
                    onChange={onChangeDomainTypeHandler}
                    width={"100%"}
                  />
                </Column>
              </Row>
            </Column>
          </BorderedLayout>
        </Column>
      </Column>
    </PageContainer>
  );
});

export default ManageDomain;