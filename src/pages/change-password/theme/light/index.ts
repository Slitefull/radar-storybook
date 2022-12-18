import { css } from "styled-components/macro";
import { NEUTRAL_90, PRIMARY_60 } from "@/ui-kit/constants/colors";


const Title = css`
  font-family: 'Menlo', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_90};
`;

const ColoredTitle = css`
  color: ${PRIMARY_60};
`;

const ChangePasswordForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 325px;
  gap: 30px;
`;

export const changePassword = {
  Title,
  ColoredTitle,
  ChangePasswordForm,
};
