export interface SignInAPIRequestModel {
  email: string;
  password: string;
}

export interface ChangePasswordAPIRequestModel {
  password: string;
  password_confirmation: string;
  reset_password_token: string;
}

export interface ResetPasswordAPIRequestModel {
  email: string;
}

export interface SignInAPIResponseModel {
  message: string;
  user_id?: number;
}

export interface CheckIfSessionExistsResponseModel {
  message: string;
}

export interface ResetPasswordAPIResponseModel {
  message: string;
}
