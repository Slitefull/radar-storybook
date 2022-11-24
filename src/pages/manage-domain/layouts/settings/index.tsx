import { FC, memo, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { EBONY, RAISIN_BLACK } from "@/ui-kit/constants/colors";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import ColoredText from "@/ui-kit/components/text/colored";
import Dropdown from "@/ui-kit/components/dropdowns/with-types";
import Input from "@/ui-kit/components/inputs/text";
import BorderedLayout from "@/ui-kit/components/layouts/bordered";

import { Column, Row } from "@/global.css";


const Settings: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

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
  );
});

export default Settings;