import { FC, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PRIMARY_40, PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import { SIGN_IN_PAGE } from "@/constants/routes";
import loadable from "@loadable/component";
import Text from "@/ui-kit/components/typography/text";
import SignUpFormFallback from "@/pages/sign-up/form/fallback";

import { Column, Row } from "@/global.css";
import { ColoredTitle, Title } from "./styled";


const SignUpForm = loadable(() => import("./form"), { fallback: <SignUpFormFallback/> });

const SignUpPage: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSignInHandler = useCallback(() => navigate(SIGN_IN_PAGE), [navigate]);

  return (
    <Column
      width={"100%"}
      align={"center"}
      padding={"0 30px"}
      gap={60}
    >
      <Title>
        {capitalizeFirstLetter(t("create"))} <ColoredTitle>{t("a_new_account")}</ColoredTitle>
      </Title>
      <SignUpForm/>
      <Row gap={5}>
        <Text color={NEUTRAL_60}>
          {capitalizeFirstLetter(t("already_have_an_account"))}?
        </Text>
        <Text
          weight={"bold"}
          color={PRIMARY_60}
          hoverColor={PRIMARY_40}
          onClick={onSignInHandler}
        >
          {capitalizeFirstLetter(t("login"))}
        </Text>
      </Row>
    </Column>
  );
});

export default SignUpPage;
