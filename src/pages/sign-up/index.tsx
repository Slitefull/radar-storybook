import { FC, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PLUMP_PURPLE, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import { SIGN_IN_PAGE } from "@/constants/routes";
import loadable from "@loadable/component";
import ColoredText from "@/ui-kit/components/text/colored";
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
        <ColoredText color={ROCKET_METALLIC}>
          {capitalizeFirstLetter(t("already_have_an_account"))}?
        </ColoredText>
        <ColoredText
          weight={"bold"}
          color={PLUMP_PURPLE}
          onClick={onSignInHandler}
        >
          {capitalizeFirstLetter(t("login"))}
        </ColoredText>
      </Row>
    </Column>
  );
});

export default SignUpPage;
