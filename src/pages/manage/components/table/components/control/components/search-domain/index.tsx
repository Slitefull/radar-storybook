import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { ADD_DOMAIN_PAGE } from "@/constants/routes";
import Input from "@/ui-kit/components/controls/text";
import ButtonLink from "@/ui-kit/components/buttons/link";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle";

import { Row } from "@/global.css";


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
        withErrors={false}
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

export default SearchDomain;