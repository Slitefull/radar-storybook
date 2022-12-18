import { FC, memo, useCallback } from 'react';
import { useSetRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNotification } from "@/ui-kit/hooks/useNotification";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { email } from "@/ui-kit/helpers/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordAPI } from "@/api/auth/auth";
import { NEUTRAL_70 } from "@/ui-kit/constants/colors";
import { resetPassword } from "@/entity/atoms/auth/reset-password";
import { ToastTypes } from "@/ui-kit/components/generals/notifications/types";
import FormsTextInput from "@/ui-kit/components/forms/text-input";
import Button from "@/ui-kit/components/buttons/button";
import * as yup from "yup";

import { ResetPasswordForm as SResetPasswordForm } from "../styled";


interface ResetPasswordValues {
  email: string;
}

const ResetPasswordForm: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const { notify } = useNotification();
  const setResetPassword = useSetRecoilState(resetPassword);

  const validationSchema = yup.object().shape({
    email: email(t, true),
  });

  const defaultValues: ResetPasswordValues = {
    email: "",
  };

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
      .then(() => setResetPassword(true))
      .catch((error) => {
        notify({
          title: JSON.parse(error.message).message,
          type: ToastTypes.Error,
        });
      })
  }, [notify, setResetPassword]);

  return (
    <SResetPasswordForm onSubmit={handleSubmit((values: ResetPasswordValues) => onSubmitHandler(values))}>
      <FormsTextInput
        name={"email"}
        type={"text"}
        control={control}
        label={capitalizeFirstLetter(t("email"))}
        labelColor={NEUTRAL_70}
        labelWeight={"bold"}
        error={errors.email?.message}
      />
      <Button disabled={isSubmitting}>
        {capitalizeFirstLetter(t("send_instructions"))}
      </Button>
    </SResetPasswordForm>
  )
});

export default ResetPasswordForm;