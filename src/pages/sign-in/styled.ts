import styled from "styled-components";


export const Title = styled.h1`
  ${({ theme }) => theme.components.pages.signIn.Title}
`;

export const ColoredTitle = styled.span`
  ${({ theme }) => theme.components.pages.signIn.ColoredTitle}
`;

export const SignInForm = styled.form`
  ${({ theme }) => theme.components.pages.signIn.SignInForm}
`;
