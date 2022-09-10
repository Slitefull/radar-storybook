import styled from "styled-components";
import { css } from "styled-components/macro";

import { WithLabelWrapperProps } from "./types";


export const WithLabelWrapper = styled.div<WithLabelWrapperProps>` && {
  ${({ theme }) => css`${theme.components.dropdown.WithLabelWrapper}`}
}`;

export const Label = styled.span` && {
  ${({ theme }) => css`${theme.components.dropdown.Label}`}
}`;
