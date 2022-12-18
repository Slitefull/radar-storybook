import { FC, Fragment, memo } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PRIMARY_40, PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import Text from "@/ui-kit/components/typography/text";
import ChangePasswordForm from "../../form";

import { Column, Row } from "@/global.css";
import { ColoredTitle, SubTitle, Title } from "../../styled";


const FormLayout: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Fragment>
      <Column align={"center"} gap={30}>
        <Title>
          {capitalizeFirstLetter(t("reset"))} <ColoredTitle>{t("password")}</ColoredTitle>
        </Title>
        <SubTitle>
          {capitalizeFirstLetter(t("enter_the_email_associated_with_your_account_and_well"))}
        </SubTitle>
      </Column>
      <ChangePasswordForm/>
      <Column gap={5} align={"center"}>
        <Text color={NEUTRAL_60}>
          {capitalizeFirstLetter(t("did_not_receive_the_email_check_your_spam_filter"))},
        </Text>
        <Row gap={5}>
          <Text color={NEUTRAL_60}>
            {t("or")}
          </Text>
          <Text
            weight={"bold"}
            color={PRIMARY_60}
            hoverColor={PRIMARY_40}
            onClick={() => navigate(-1)}
          >
            {t("try_another_email_address")}
          </Text>
        </Row>
      </Column>
    </Fragment>
  );
});

export default FormLayout;