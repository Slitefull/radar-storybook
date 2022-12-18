import { FC, Fragment, memo, useCallback } from 'react';
import { useSetRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PRIMARY_40, PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import { resetPassword } from "@/entity/atoms/auth/reset-password";
import CheckCircle from "@/ui-kit/customized-icons/check-circle";
import Text from "@/ui-kit/components/typography/text";

import { Column, Row } from "@/global.css";
import { ColoredTitle, SubTitle, Title } from "../../styled";


const CheckEmailLayout: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const setResetPassword = useSetRecoilState(resetPassword);

  const onTryAnotherEmailHandler = useCallback(
    () => setResetPassword(false),
    [setResetPassword]
  );

  return (
    <Fragment>
      <Column align={"center"} gap={30}>
        <Title>
          {capitalizeFirstLetter(t("reset"))} <ColoredTitle>{t("password")}</ColoredTitle>
        </Title>
        <SubTitle>
          {capitalizeFirstLetter(t("check_your_the_email_to_reset_your_password"))}.
        </SubTitle>
      </Column>
      <CheckCircle size={132}/>
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
            onClick={onTryAnotherEmailHandler}
          >
            {t("try_another_email_address")}
          </Text>
        </Row>
      </Column>
    </Fragment>
  );
});

export default CheckEmailLayout;