import { baseAPI } from "@/infrastructure/api/api";

import {
  ApiResponse,
  ChangePasswordAPIRequestModel,
  ResetPasswordAPIRequestModel,
  SApiResponse,
  SignInAPIRequestModel,
  SignInAPIResponseModel,
  SignUpAPIRequestModel,
  SignUpAPIResponseModel
} from "./types";


export const signInAPI = (
  {
    email,
    password
  }: SignInAPIRequestModel
): Promise<ApiResponse<SignInAPIResponseModel>> => (
  baseAPI.url(`/sessions`)
    .post({
      email,
      password
    })
    .res()
);

export const signUpAPI = (
  {
    name,
    email,
    password,
    service_level
  }: SignUpAPIRequestModel
): Promise<ApiResponse<SignUpAPIResponseModel>> => (
  baseAPI.url(`/auth`)
    .post({
      name,
      email,
      password,
      service_level
    })
    .res()
);

export const checkIfSessionExistsAPI = (): Promise<SApiResponse> => (
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
): Promise<SApiResponse> => (
  baseAPI.url(`/auth/password`)
    .patch({
      password,
      password_confirmation,
      reset_password_token
    })
    .res()
)

export const resetPasswordAPI = (
  {
    email
  }: ResetPasswordAPIRequestModel
): Promise<SApiResponse> => (
  baseAPI.url(`/auth/password`)
    .post({ email })
    .res()
)
