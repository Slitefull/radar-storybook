import styled from "styled-components";


export const Title = styled.h1`
  ${({ theme }) => theme.components.pages.resetPassword.Title}
`;

export const ColoredTitle = styled.span`
  ${({ theme }) => theme.components.pages.resetPassword.ColoredTitle}
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.components.pages.resetPassword.SubTitle}
`;

export const ResetPasswordForm = styled.form`
  ${({ theme }) => theme.components.pages.resetPassword.ResetPasswordForm}
`;
