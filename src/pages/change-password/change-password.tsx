import { FC, useCallback } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { yupResolver } from "@hookform/resolvers/yup";
import { confirmPassword, password } from "@/ui-kit/helpers/validators";
import { FormsTextInput } from "@/ui-kit/components/forms/text-input/forms-text-input";
import PageContainer from "@/ui-kit/components/page-container/page-container";
import { changePasswordAPI } from "@/api/auth/auth";
import { ToastTypes } from "@/ui-kit/components/notifications/types";
import { authState } from "@/entity/atoms/auth";
import { useNotification } from "@/ui-kit/hooks/useNotification";

import {
  ChangePasswordButton,
  ChangePasswordForm,
  ChangePasswordFormBody,
  ChangePasswordFormHeader,
  Subtitle,
  Title
} from "./styled";


interface ChangePasswordValues {
  password: string;
  password_confirmation: string;
}

const ChangePasswordPage: FC = (): JSX.Element => {
  const { notify } = useNotification();
  const setAuth = useSetRecoilState(authState);

  const validationSchema = yup.object().shape({
    password: password(),
    password_confirmation: confirmPassword('password'),
  });

  const defaultValues = {
    password: "",
    password_confirmation: "",
  }

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
      reset_password_token: 'qwe'
    }).then(() => {
      setAuth(true);
    }).catch((error) => {
      notify({
        title: JSON.parse(error.message).error,
        type: ToastTypes.Error,
      });
      setAuth(false);
    })
  }, [notify, setAuth])

  return (
    <PageContainer>
      <ChangePasswordForm onSubmit={handleSubmit((values: ChangePasswordValues) => onSubmitHandler(values))}>
        <ChangePasswordFormHeader>
          <Title>Change Password</Title>
          <Subtitle>Enter a new password</Subtitle>
        </ChangePasswordFormHeader>
        <ChangePasswordFormBody>
          <FormsTextInput
            name="password"
            control={control}
            type={"password"}
            placeholder={"Password"}
            error={errors.password?.message}
          />
          <FormsTextInput
            name="password_confirmation"
            control={control}
            type={"password"}
            placeholder={"Verify password"}
            error={errors.password_confirmation?.message}
          />
          <ChangePasswordButton disabled={isSubmitting}>
            Change password
          </ChangePasswordButton>
        </ChangePasswordFormBody>
      </ChangePasswordForm>
    </PageContainer>
  )
}

export default ChangePasswordPage;
