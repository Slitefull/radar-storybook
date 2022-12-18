import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useNotification } from "@/ui-kit/hooks/useNotification";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { confirmPassword, password } from "@/ui-kit/helpers/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordAPI } from "@/api/auth/auth";
import { RESET_PASSWORD_TOKEN } from "@/constants/auth";
import { MONITORING_PAGE, SIGN_IN_PAGE } from "@/constants/routes";
import { NEUTRAL_70 } from "@/ui-kit/constants/colors";
import { ToastTypes } from "@/ui-kit/components/generals/notifications/types";
import FormsTextInput from "@/ui-kit/components/forms/text-input";
import Button from "@/ui-kit/components/buttons/button";
import * as yup from "yup";

import { ChangePasswordForm as SChangePasswordForm } from "../styled";


interface ChangePasswordValues {
  password: string;
  password_confirmation: string;
}

const SignInForm: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { notify } = useNotification();

  const validationSchema = yup.object().shape({
    password: password(t),
    password_confirmation: confirmPassword(t, "password"),
  });

  const defaultValues: ChangePasswordValues = {
    password: "",
    password_confirmation: "",
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ChangePasswordValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = useCallback(async (values: ChangePasswordValues) => {
    const { password, password_confirmation } = values;
    await changePasswordAPI({
      password,
      password_confirmation,
      reset_password_token: RESET_PASSWORD_TOKEN,
    })
      .then(() => {
        navigate(MONITORING_PAGE);
      })
      .catch((error) => {
        notify({
          title: JSON.parse(error.message).error,
          type: ToastTypes.Error,
        });
      })
  }, [notify, navigate]);

  useEffect(() => {
    if (!searchParams.get(RESET_PASSWORD_TOKEN)) {
      navigate(SIGN_IN_PAGE);
    }
  }, []);

  return (
    <SChangePasswordForm onSubmit={handleSubmit((values: ChangePasswordValues) => onSubmitHandler(values))}>
      <FormsTextInput
        name={"password"}
        type={"password"}
        control={control}
        label={capitalizeFirstLetter(t("password"))}
        labelColor={NEUTRAL_70}
        labelWeight={"bold"}
        error={errors.password?.message}
      />
      <FormsTextInput
        name={"password_confirmation"}
        type={"password"}
        control={control}
        label={capitalizeFirstLetter(t("confirm_password"))}
        labelColor={NEUTRAL_70}
        labelWeight={"bold"}
        error={errors.password_confirmation?.message}
      />
      <Button disabled={isSubmitting}>
        {capitalizeFirstLetter(t("reset_password"))}
      </Button>
    </SChangePasswordForm>
  );
});

export default SignInForm;