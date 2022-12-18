import styled from "styled-components";


export const Title = styled.h1`
  ${({ theme }) => theme.components.pages.changePassword.Title}
`;

export const ColoredTitle = styled.span`
  ${({ theme }) => theme.components.pages.changePassword.ColoredTitle}
`;

export const ChangePasswordForm = styled.form`
  ${({ theme }) => theme.components.pages.changePassword.ChangePasswordForm}
`;
