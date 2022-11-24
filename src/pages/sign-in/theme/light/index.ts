import { css } from "styled-components/macro";
import { DARK_LAVA, PLUMP_PURPLE } from "@/ui-kit/constants/colors";


const Title = css`
  font-family: 'Menlo', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`;

const ColoredTitle = css`
  color: ${PLUMP_PURPLE};
`;

const SignInForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 325px;
  gap: 30px;
`;

export const signIn = {
  Title,
  SignInForm,
  ColoredTitle,
};
