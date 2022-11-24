import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { email } from "@/ui-kit/helpers/validators";
import { EBONY, PLUMP_PURPLE, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import { SIGN_UP_PAGE } from "@/constants/routes";
import { resetPasswordAPI } from "@/api/auth/auth";
import { useNotification } from "@/ui-kit/hooks/useNotification";
import { ToastTypes } from "@/ui-kit/components/notifications/types";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import * as yup from "yup";
import FormsTextInput from "@/ui-kit/components/forms/text-input";
import Button from "@/ui-kit/components/buttons/button";
import ColoredText from "@/ui-kit/components/text/colored";

import { Column, Row } from "@/global.css";
import { ColoredTitle, ResetPasswordForm, SubTitle, Title } from "./styled";


interface ResetPasswordValues {
  email: string;
}

const SignInPage: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { notify } = useNotification();

  const validationSchema = yup.object().shape({
    email: email(t, true),
  });

  const defaultValues = {
    email: "",
  }

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ResetPasswordValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = useCallback(async (values: ResetPasswordValues) => {
    const { email } = values;
    await resetPasswordAPI({ email })
      .then(() => console.log("SUCCESS"))
      .catch((error) => {
        notify({
          title: JSON.parse(error.message).message,
          type: ToastTypes.Error,
        });
      })
  }, [notify]);

  return (
    <Column
      width={"375px"}
      align={"center"}
      gap={60}
    >
      <Column align={"center"} gap={30}>
        <Title>
          {capitalizeFirstLetter(t("reset"))} <ColoredTitle>{t("password")}</ColoredTitle>
        </Title>
        <SubTitle>
          {capitalizeFirstLetter(t("enter_the_email_associated_with_your_account_and_well"))}
        </SubTitle>
      </Column>
      <ResetPasswordForm onSubmit={handleSubmit((values: ResetPasswordValues) => onSubmitHandler(values))}>
        <FormsTextInput
          name="email"
          type={"text"}
          control={control}
          label={capitalizeFirstLetter(t("email"))}
          labelColor={EBONY}
          labelWeight={"bold"}
          error={errors.email?.message}
        />
        <Button disabled={isSubmitting}>
          {capitalizeFirstLetter(t("send_instructions"))}
        </Button>
      </ResetPasswordForm>
      <Column gap={5} align={"center"}>
        <ColoredText color={ROCKET_METALLIC}>
          {capitalizeFirstLetter(t("did_not_receive_the_email_check_your_spam_filter"))},
        </ColoredText>
        <Row gap={5}>
          <ColoredText color={ROCKET_METALLIC}>
            {t("or")}
          </ColoredText>
          <ColoredText
            weight={"bold"}
            color={PLUMP_PURPLE}
          >
            {t("try_another_email_address")}
          </ColoredText>
        </Row>
      </Column>
    </Column>
  )
});

export default SignInPage;
