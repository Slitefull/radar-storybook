import { FC, memo, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/ui-kit/hooks/useNotification";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { useAuth } from "@/ui-kit/hooks/useAuth";
import { email, password } from "@/ui-kit/helpers/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInAPI } from "@/api/auth/auth";
import { MONITOR_CHANGES_PAGE, RESET_PASSWORD_PAGE } from "@/constants/routes";
import { EBONY, PLUMP_PURPLE } from "@/ui-kit/constants/colors";
import { ToastTypes } from "@/ui-kit/components/notifications/types";
import FormsTextInput from "@/ui-kit/components/forms/text-input";
import ColoredText from "@/ui-kit/components/text/colored";
import Button from "@/ui-kit/components/buttons/button";
import * as yup from "yup";

import { SignInForm as SSignInForm } from "@/pages/sign-in/styled";


interface LoginValues {
  email: string;
  password: string;
}

const SignInForm: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const { notify } = useNotification();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: email(t, true),
    password: password(t),
  });

  const defaultValues = {
    email: "",
    password: "",
  }

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = useCallback(async (values: LoginValues) => {
    const { email, password } = values;
    await signInAPI({ email, password })
      .then(() => {
        setAuth(true);
        navigate(MONITOR_CHANGES_PAGE);
      })
      .catch((error) => {
        notify({
          title: JSON.parse(error.message).message,
          type: ToastTypes.Error,
        });
        setAuth(false);
      })
  }, [notify, setAuth]);

  const onForgotPasswordHandler = useCallback(() => navigate(RESET_PASSWORD_PAGE), [navigate]);

  return (
    <SSignInForm onSubmit={handleSubmit((values: LoginValues) => onSubmitHandler(values))}>
      <FormsTextInput
        name="email"
        type={"text"}
        control={control}
        label={capitalizeFirstLetter(t("email"))}
        labelColor={EBONY}
        labelWeight={"bold"}
        error={errors.email?.message}
      />
      <FormsTextInput
        name="password"
        type={"password"}
        control={control}
        label={capitalizeFirstLetter(t("password"))}
        labelColor={EBONY}
        labelWeight={"bold"}
        error={errors.password?.message}
        subText={
          <ColoredText
            weight={"bold"}
            color={PLUMP_PURPLE}
            margin={"0 0 0 auto"}
            onClick={onForgotPasswordHandler}
          >
            {capitalizeFirstLetter(t("forgot_your_password"))}?
          </ColoredText>
        }
      />
      <Button disabled={isSubmitting}>
        {capitalizeFirstLetter(t("login"))}
      </Button>
    </SSignInForm>
  );
});

export default SignInForm;