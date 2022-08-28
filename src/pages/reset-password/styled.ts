import styled, { DefaultTheme } from "styled-components";
import { media } from "../../ui-kit/helpers/media";
import { breakpoints } from "../../ui-kit/constants/breakpoints";


export const ResetPasswordForm = styled.form` && {
  max-width: 400px;
  margin: auto;
  transform: translateY(50%);
}`;

export const ResetPasswordFormHeader = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  margin-bottom: 30px;
}`;

export const ResetPasswordFormBody = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}`;

export const Title = styled.h1<{ theme: DefaultTheme }>` && {
  text-align: center;

  ${media("font-size", "px", [
    { [breakpoints.md]: 24 },
  ])};

  ${media("font-size", "px", [
    { [breakpoints.sm]: 20 },
  ])};
}`;

export const Subtitle = styled.h2<{ theme: DefaultTheme }>` && {
  text-align: center;

  ${media("font-size", "px", [
    { [breakpoints.md]: 16 },
  ])};

  ${media("font-size", "px", [
    { [breakpoints.sm]: 14 },
  ])};
}`;

export const ResetPasswordButton = styled.button<{ theme: DefaultTheme }>` && {
  width: 100%;
  height: 48px;
  max-width: 240px;
  border-radius: 3px;
  outline: none;
  border: none;
  margin: auto;

  ${media("height", "px", [
    { [breakpoints.md]: 42 },
  ])};

  ${media("height", "px", [
    { [breakpoints.sm]: 36 },
  ])};
}`
