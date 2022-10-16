import styled from "styled-components";
import { css } from "styled-components/macro";

import { STabProps } from "./types";


export const inactiveTab = {
  opacity: 1,
};

export const STab = styled.button<STabProps>`
  ${({ theme }) => css`${theme.components.tab.STab}`}
`;
