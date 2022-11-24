import styled from "styled-components";


export const Title = styled.h1`
  ${({ theme }) => theme.components.pages.signUp.Title}
`;

export const ColoredTitle = styled.span`
  ${({ theme }) => theme.components.pages.signUp.ColoredTitle}
`;

export const SignUpForm = styled.form`
  ${({ theme }) => theme.components.pages.signUp.SignUpForm}
`;
