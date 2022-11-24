import { FC, memo, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { selectedTableTypeState } from "@/entity/atoms/manage/table-type";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { ADD_DOMAIN_PAGE } from "@/constants/routes";
import { PLUMP_PURPLE, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import Input from "@/ui-kit/components/inputs/text";
import ButtonLink from "@/ui-kit/components/buttons/link";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle";
import RadioGroup from "@/ui-kit/components/inputs/radio-group";
import Radio from "@/ui-kit/components/inputs/radio";

import { Row } from "@/global.css";


enum TableTypes {
  domainsUrls = "domainsUrls",
  keywords = "keywords",
  redirectTesting = "redirectTesting",
}

const SearchDomain: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onChangeInputHandler = useCallback(
    () => console.log("change input"),
    [],
  );

  const onAddDomainHandler = useCallback(
    () => navigate(ADD_DOMAIN_PAGE),
    [navigate],
  );

  return (
    <Row align={"center"} gap={20}>
      <Input
        onChange={onChangeInputHandler}
        placeholder={capitalizeFirstLetter(t("search_domain"))}
        width={"320px"}
      />
      <ButtonLink
        color={"text"}
        onClick={onAddDomainHandler}
        icon={<PlusCircleIcon size={25}/>}
      >
        {capitalizeFirstLetter(t("add_domains"))}
      </ButtonLink>
    </Row>
  )
});

const Radios: FC = memo(() => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useRecoilState<TableTypes>(selectedTableTypeState);

  const onChangeRadioHandler = useCallback(
    (value: TableTypes) => setSelectedType(value),
    [],
  );

  const getLabelColor = (selectedType: TableTypes, currentType: TableTypes): Color => {
    if (selectedType === currentType) {
      return PLUMP_PURPLE;
    }

    return ROCKET_METALLIC;
  };

  return (
    <RadioGroup gap={40}>
      <Radio
        name={"domains"}
        label={capitalizeFirstLetter(t("domains_and_urls"))}
        labelColor={getLabelColor(selectedType, TableTypes.domainsUrls)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={TableTypes.domainsUrls}
        checked={selectedType === TableTypes.domainsUrls}
        onChange={(event) => onChangeRadioHandler(event.target.value as TableTypes)}
      />
      <Radio
        name={"domains"}
        label={capitalizeFirstLetter(t("keywords"))}
        labelColor={getLabelColor(selectedType, TableTypes.keywords)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={TableTypes.keywords}
        checked={selectedType === TableTypes.keywords}
        onChange={(event) => onChangeRadioHandler(event.target.value as TableTypes)}
      />
      <Radio
        name={"domains"}
        label={capitalizeFirstLetter(t("redirect_testing"))}
        labelColor={getLabelColor(selectedType, TableTypes.redirectTesting)}
        labelSize={"big"}
        labelPosition={"right"}
        labelWeight={"bold"}
        value={TableTypes.redirectTesting}
        checked={selectedType === TableTypes.redirectTesting}
        onChange={(event) => onChangeRadioHandler(event.target.value as TableTypes)}
      />
    </RadioGroup>
  )
});

const TableControl: FC = memo((): JSX.Element => {
  return (
    <Row
      align={"center"}
      justify={"space-between"}
      width={"100%"}
    >
      <SearchDomain/>
      <Radios/>
    </Row>
  );
});

export default TableControl;