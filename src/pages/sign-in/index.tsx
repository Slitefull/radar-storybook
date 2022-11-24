import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PLUMP_PURPLE, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import { SIGN_UP_PAGE } from "@/constants/routes";
import loadable from "@loadable/component";
import ColoredText from "@/ui-kit/components/text/colored";
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
        <ColoredText color={ROCKET_METALLIC}>
          {capitalizeFirstLetter(t("dont_have_an_account_yet"))}?
        </ColoredText>
        <ColoredText
          weight={"bold"}
          color={PLUMP_PURPLE}
          onClick={onSignUpHandler}
        >
          {capitalizeFirstLetter(t("sign_up"))}
        </ColoredText>
      </Row>
    </Column>
  )
});

export default SignInPage;
