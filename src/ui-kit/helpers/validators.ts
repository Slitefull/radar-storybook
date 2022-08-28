import * as yup from "yup";


const PASSWORD_MIN_LENGTH = 8;
const EMAIL_MAX_LENGTH = 100;

export const requiredString = () =>
  yup.string().nullable().required("This field is required!");

export const limitedString = (
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
    string = string.required(("This field is required!"));
  }

  return string;
};

export const email = (required = false) => {
  let email = yup
    .string()
    .email("Please enter a valid email address")
    .max(
      EMAIL_MAX_LENGTH,
      `Max length is ${EMAIL_MAX_LENGTH}`
    );

  if (required) {
    email = email.required("Field is required");
  }

  return email;
};

export const password = () =>
  yup
    .string()
    .required("Please enter your password")
    .min(
      PASSWORD_MIN_LENGTH,
      `Min length is ${PASSWORD_MIN_LENGTH}`
    )

export const confirmPassword = (rePasswordRef: string) =>
  yup
    .string()
    .required("This field is required!")
    .oneOf([yup.ref(rePasswordRef)], 'Passwords do not match');
