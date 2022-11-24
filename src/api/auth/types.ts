import { ServiceLevels } from "@/constants/auth/service-levels";

export interface SApiResponse {
  message: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface SignInAPIRequestModel {
  email: string;
  password: string;
}

export interface SignUpAPIRequestModel {
  name: string;
  email: string;
  password: string;
  service_level: ServiceLevels;
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
  user_id?: number;
}

export interface SignUpAPIResponseModel {
  allow_subdomain_urls: boolean;
}
