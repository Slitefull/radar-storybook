import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PRIMARY_40, PRIMARY_60, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import { SIGN_UP_PAGE } from "@/constants/routes";
import loadable from "@loadable/component";
import Text from "@/ui-kit/components/typography/text";
import SignInFallback from "./form/fallback";

import { Column, Row } from "@/global.css";
import { ColoredTitle, Title, } from "./styled";


const SignInForm = loadable(() => import("./form"), { fallback: <SignInFallback/> });

const SignInPage: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSignUpHandler = useCallback(() => navigate(SIGN_UP_PAGE), [navigate]);

  return (
    <Column
      width={"100%"}
      align={"center"}
      gap={60}
    >
      <Title>
        {capitalizeFirstLetter(t("login_to"))} <ColoredTitle>{t("your_account")}</ColoredTitle>
      </Title>
      <SignInForm/>
      <Row gap={5}>
        <Text color={NEUTRAL_60}>
          {capitalizeFirstLetter(t("dont_have_an_account_yet"))}?
        </Text>
        <Text
          weight={"bold"}
          color={PRIMARY_60}
          hoverColor={PRIMARY_40}
          onClick={onSignUpHandler}
        >
          {capitalizeFirstLetter(t("sign_up"))}
        </Text>
      </Row>
    </Column>
  )
});

export default SignInPage;
