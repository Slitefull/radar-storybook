import styled, { DefaultTheme } from "styled-components";
import { media } from "@/ui-kit/helpers/media";
import { breakpoints } from "@/ui-kit/constants/breakpoints";


export const LoginForm = styled.form` && {
  max-width: 400px;
  margin: auto;
  transform: translateY(50%);
}`;

export const LoginFormHeader = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  margin-bottom: 30px;
}`;

export const Title = styled.h1<{ theme: DefaultTheme }>` && {
  ${media("font-size", "px", [
    { [breakpoints.md]: 24 },
  ])};

  ${media("font-size", "px", [
    { [breakpoints.sm]: 20 },
  ])};
}`;

export const Subtitle = styled.h2<{ theme: DefaultTheme }>` && {
  ${media("font-size", "px", [
    { [breakpoints.md]: 16 },
  ])};

  ${media("font-size", "px", [
    { [breakpoints.sm]: 14 },
  ])};
}`;

export const LoginFormBody = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}`;

export const LoginButton = styled.button<{ theme: DefaultTheme }>` && {
  ${media("height", "px", [
    { [breakpoints.md]: 42 },
  ])};

  ${media("height", "px", [
    { [breakpoints.sm]: 36 },
  ])};
}`

export const ForgotPasswordLink = styled.span<{ theme: DefaultTheme }>` && {
  cursor: pointer;
}`


export const AdditionalText = styled.p<{ theme: DefaultTheme }>` && {
  text-align: center;
}`

export const AdditionalTextLink = styled.span<{ theme: DefaultTheme }>` && {
  text-decoration: underline;
  cursor: pointer;
}`
