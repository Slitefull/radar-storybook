import { baseAPI } from "@/infrastructure/api/api";

import {
  ChangePasswordAPIRequestModel,
  CheckIfSessionExistsResponseModel,
  ResetPasswordAPIRequestModel,
  ResetPasswordAPIResponseModel,
  SignInAPIRequestModel,
  SignInAPIResponseModel
} from "./types";


export const signInAPI = (
  {
    email,
    password
  }: SignInAPIRequestModel
): Promise<SignInAPIResponseModel> => (
  baseAPI.url(`/sessions`)
    .post({
      email,
      password
    })
    .res()
);

export const checkIfSessionExistsAPI = (): Promise<CheckIfSessionExistsResponseModel> => (
  baseAPI.url('/sessions/check_if_session_exist')
    .get()
    .json()
);

export const changePasswordAPI = (
  {
    password,
    password_confirmation,
    reset_password_token
  }: ChangePasswordAPIRequestModel
): Promise<string> => (
  baseAPI.url(`/auth/password`)
    .patch({
      password,
      password_confirmation,
      reset_password_token
    })
    .res()
)

export const resetPasswordAPI = ({ email }: ResetPasswordAPIRequestModel): Promise<ResetPasswordAPIResponseModel> => (
  baseAPI.url(`/auth/password`)
    .post({ email })
    .res()
)
