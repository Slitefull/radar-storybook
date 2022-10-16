import { FC, useCallback } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { yupResolver } from "@hookform/resolvers/yup";
import { email, password } from "@/ui-kit/helpers/validators";
import { FormsTextInput } from "@/ui-kit/components/forms/text-input/forms-text-input";
import { authState } from "@/entity/atoms/auth";
import { RESET_PASSWORD_PAGE, SIGN_UP_PAGE } from "@/constants/routes";
import { signInAPI } from "@/api/auth/auth";
import { useNotification } from "@/ui-kit/hooks/useNotification";
import { ToastTypes } from "@/ui-kit/components/notifications/types";
import PageContainer from "@/ui-kit/components/page-container/simple/simple";

import {
  AdditionalText,
  AdditionalTextLink,
  ForgotPasswordLink,
  LoginButton,
  LoginForm,
  LoginFormBody,
  LoginFormHeader,
  Subtitle,
  Title
} from "./styled";


interface LoginValues {
  email: string;
  password: string;
}

const SignInPage: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authState);
  const { notify } = useNotification();

  const validationSchema = yup.object().shape({
    email: email(true),
    password: password(),
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

  const onForgotPasswordHandler = useCallback(() => {
    navigate(RESET_PASSWORD_PAGE);
  }, [navigate]);

  const onGetStartedHandler = useCallback(() => {
    navigate(SIGN_UP_PAGE);
  }, [navigate]);

  const onSubmitHandler = useCallback(async (values: LoginValues) => {
    const { email, password } = values;
    await signInAPI({ email, password })
      .then(() => {
        setAuth(true);
      })
      .catch((error) => {
        notify({
          title: JSON.parse(error.message).message,
          type: ToastTypes.Error,
        });
        setAuth(false);
      })
  }, [notify, setAuth]);

  return (
    <PageContainer>
      <LoginForm onSubmit={handleSubmit((values: LoginValues) => onSubmitHandler(values))}>
        <LoginFormHeader>
          <Title>Sign In</Title>
          <Subtitle>Monitor your site’s latest SEO changes</Subtitle>
        </LoginFormHeader>
        <LoginFormBody>
          <FormsTextInput
            name="email"
            control={control}
            placeholder={"Email"}
            type={"text"}
            error={errors.email?.message}
          />
          <FormsTextInput
            name="password"
            control={control}
            placeholder={"Password"}
            type={"password"}
            error={errors.password?.message}
          />
          <ForgotPasswordLink onClick={onForgotPasswordHandler}>Forgot password?</ForgotPasswordLink>
          <LoginButton disabled={isSubmitting}>
            Sign In
          </LoginButton>
          <AdditionalText>
            New to SEO Radar? <AdditionalTextLink onClick={onGetStartedHandler}>Get started!</AdditionalTextLink>
          </AdditionalText>
        </LoginFormBody>
      </LoginForm>
    </PageContainer>
  )
}

export default SignInPage;
