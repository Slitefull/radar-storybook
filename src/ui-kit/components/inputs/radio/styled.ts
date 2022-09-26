import styled from "styled-components";
import { css } from "styled-components/macro";

import { LabelProps } from "@/ui-kit/components/inputs/radio/types";


export const Label = styled.label<LabelProps>` && {
  ${({ theme }) => css`${theme.components.radio.Label}`}
}`

export const SRadio = styled.input` && {
  ${({ theme }) => css`${theme.components.radio.SRadio}`}
}`
