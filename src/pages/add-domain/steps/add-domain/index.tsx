import { FC, memo, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { NEUTRAL_70 } from "@/ui-kit/constants/colors";
import Textarea from "@/ui-kit/components/controls/textarea";
import Input from "@/ui-kit/components/controls/text";
import AddDomainSlider from "@/pages/add-domain/components/text-slider";
import Dropdown from '@/ui-kit/components/controls/with-types';
import LineSeparator from "@/ui-kit/components/separators/line";

import { Column } from "@/global.css";
import { TooltipText } from "../../styled";


const AddDomain: FC = memo((): JSX.Element => {
  const { t } = useTranslation();

  const domainTypeOptions = [
    { value: "my_domain", label: "my domain" },
    { value: "my_domain_2", label: "my domain" },
    { value: "my_domain_3", label: "my domain" },
  ];

  const onChangeDomainTypeHandler = useCallback(
    () => console.log("change"),
    []
  );

  const onChangeDomainHandler = useCallback(
    () => console.log("change"),
    []
  );

  const onChangeDisplayNameHandler = useCallback(
    () => console.log("change"),
    []
  );

  const onChangeBrandedKeywordsHandler = useCallback(
    () => console.log("change"),
    []
  );

  return (
    <Column>
      <AddDomainSlider/>
      <Column
        gap={30}
        width={"350px"}
        margin={"20px auto 0"}
      >
        <Dropdown
          types={[]}
          label={capitalizeFirstLetter(t("domain_type"))}
          labelColor={NEUTRAL_70}
          labelWeight={"bold"}
          labelPosition={"top"}
          options={domainTypeOptions}
          onChange={onChangeDomainTypeHandler}
          width={"100%"}
        />
        <Input
          label={capitalizeFirstLetter(t("domain"))}
          labelColor={NEUTRAL_70}
          labelWeight={"bold"}
          placeholder={"e.g. www.example.com"}
          onChange={onChangeDomainHandler}
        />
        <Input
          label={capitalizeFirstLetter(t("display_name"))}
          labelColor={NEUTRAL_70}
          labelWeight={"bold"}
          placeholder={"e.g. Example"}
          onChange={onChangeDisplayNameHandler}
          tooltip={
            <TooltipText>
              Red Alerts - we mark alerts that are outliers as a Red Alert. They are based on
              frequency and previous audit data regardless of priority.
            </TooltipText>
          }
        />
        <Textarea
          label={capitalizeFirstLetter(t("branded_keywords"))}
          labelColor={NEUTRAL_70}
          labelWeight={"bold"}
          placeholder={t("type_your_keywords_separated_with_comma")}
          onChange={onChangeBrandedKeywordsHandler}
          tooltip={
            <TooltipText>
              Red Alerts - we mark alerts that are outliers as a Red Alert. They are based on
              frequency and previous audit data regardless of priority.
            </TooltipText>
          }
        />
        <LineSeparator/>
      </Column>
    </Column>
  );
});

export default AddDomain;
