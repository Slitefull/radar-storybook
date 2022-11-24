import * as yup from "yup";
import { TFunction } from "i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";


const PASSWORD_MIN_LENGTH = 8;
const EMAIL_MAX_LENGTH = 100;

export const requiredString = (t: TFunction) => yup.string().nullable().required(capitalizeFirstLetter(t("this_field_is_required"))!);

export const limitedString = (
  t: TFunction,
  options: {
    maxLength: number;
    minLength?: number;
  },
  required = false
) => {
  let string = required ? yup
      .string()
      .max(
        options.maxLength,
        `Value is too long ${options.maxLength}`
      )
    : yup.string()
      .nullable(true)
      .max(
        options.maxLength,
        `ui-kit.value-is-too-long ${options.maxLength}`
      );

  if (options.minLength !== undefined) {
    string = string.min(
      options.minLength,
      `ui-kit.value-is-too-short ${options.minLength}`
    );
  }

  if (required) {
    string = string.required(capitalizeFirstLetter(t("this_field_is_required"))!);
  }

  return string;
};

export const email = (t: TFunction, required = false) => {
  let email = yup
    .string()
    .email(capitalizeFirstLetter(t("please_enter_a_valid_email_address")))
    .max(
      EMAIL_MAX_LENGTH,
      `Max length is ${EMAIL_MAX_LENGTH}`
    );

  if (required) {
    email = email.required(capitalizeFirstLetter(t("this_field_is_required")));
  }

  return email;
};

export const password = (t: TFunction) =>
  yup
    .string()
    .required(capitalizeFirstLetter(t("please_enter_your_password")))
    .min(
      PASSWORD_MIN_LENGTH,
      `Min length is ${PASSWORD_MIN_LENGTH}`
    )

export const confirmPassword = (t: TFunction, rePasswordRef: string) =>
  yup
    .string()
    .required(capitalizeFirstLetter(t("this_field_is_required")))
    .oneOf([yup.ref(rePasswordRef)], capitalizeFirstLetter(t("passwords_do_not_match")));
