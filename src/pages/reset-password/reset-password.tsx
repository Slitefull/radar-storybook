import { FC } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { email } from "@/ui-kit/helpers/validators";
import { FormsTextInput } from "@/ui-kit/components/forms/text-input/forms-text-input";
import PageContainer from "@/ui-kit/components/page-container/simple/simple";

import {
  ResetPasswordButton,
  ResetPasswordForm,
  ResetPasswordFormBody,
  ResetPasswordFormHeader,
  Subtitle,
  Title
} from "./styled";


interface ResetPasswordValues {
  email: string;
}

const ResetPasswordPage: FC = (): JSX.Element => {
  const validationSchema = yup.object().shape({
    email: email(),
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

  return (
    <PageContainer>
      <ResetPasswordForm
        onSubmit={handleSubmit((values: ResetPasswordValues) => {
            console.log(values, 'values')
          }
        )}
      >
        <ResetPasswordFormHeader>
          <Title>Let’s reset your password</Title>
          <Subtitle>
            Enter the email used to set up your account and we’ll send a link on how to reset your password.
          </Subtitle>
        </ResetPasswordFormHeader>
        <ResetPasswordFormBody>
          <FormsTextInput
            name="email"
            control={control}
            placeholder={"Email"}
            type={"text"}
            error={errors.email?.message}
          />
          <ResetPasswordButton disabled={isSubmitting}>
            Reset password
          </ResetPasswordButton>
        </ResetPasswordFormBody>
      </ResetPasswordForm>
    </PageContainer>
  )
}

export default ResetPasswordPage;
