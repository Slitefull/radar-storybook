import { FC, useCallback } from 'react';
import { useSetRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNotification } from "@/ui-kit/hooks/useNotification";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { confirmPassword, email, password, requiredString } from "@/ui-kit/helpers/validators";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { signUpAPI } from "@/api/auth/auth";
import { authState } from "@/entity/atoms/auth/auth";
import { ToastTypes } from "@/ui-kit/components/generals/notifications/types";
import { ServiceLevels } from "@/constants/auth";
import { NEUTRAL_70 } from "@/ui-kit/constants/colors";
import Button from "@/ui-kit/components/buttons/button";
import FormsTextInput from "@/ui-kit/components/forms/text-input";
import * as yup from "yup";

import { Column, Row } from "@/global.css";
import { SignUpForm as SSignUpForm } from "../styled";


interface SignUpValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  service_level: ServiceLevels;
}

const SignUpForm: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const setAuth = useSetRecoilState(authState);
  const { notify } = useNotification();

  const validationSchema = yup.object().shape({
    name: requiredString(t),
    email: email(t, true),
    password: password(t),
    confirm_password: confirmPassword(t, "password"),
  });

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    service_level: ServiceLevels.Lite,
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = useCallback(async (values: SignUpValues) => {
    const { name, email, password, service_level } = values;
    await signUpAPI({ name, email, password, service_level })
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
    <SSignUpForm onSubmit={handleSubmit((values: SignUpValues) => onSubmitHandler(values))}>
      <Row width={"100%"}>
        <Column
          width={"100%"}
          gap={5}
        >
          <FormsTextInput
            name="name"
            type={"text"}
            control={control}
            label={capitalizeFirstLetter(t("name"))}
            labelColor={NEUTRAL_70}
            labelWeight={"bold"}
            error={errors.name?.message}
            full
          />
          <FormsTextInput
            name="email"
            type={"text"}
            control={control}
            label={capitalizeFirstLetter(t("email"))}
            labelColor={NEUTRAL_70}
            labelWeight={"bold"}
            error={errors.email?.message}
            full
          />
        </Column>
        <Column
          width={"100%"}
          gap={5}
        >
          <FormsTextInput
            name="password"
            type={"password"}
            control={control}
            label={capitalizeFirstLetter(t("password"))}
            labelColor={NEUTRAL_70}
            labelWeight={"bold"}
            error={errors.password?.message}
            full
          />
          <FormsTextInput
            name="confirm_password"
            type={"password"}
            control={control}
            label={capitalizeFirstLetter(t("confirm_password"))}
            labelColor={NEUTRAL_70}
            labelWeight={"bold"}
            error={errors.confirm_password?.message}
            full
          />
        </Column>
      </Row>
      <Button disabled={isSubmitting}>
        {capitalizeFirstLetter(t("sign_up"))}
      </Button>
    </SSignUpForm>
  );
};

export default SignUpForm;