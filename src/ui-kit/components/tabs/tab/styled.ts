import styled from "styled-components";

import { STabProps } from "./types";


export const inactiveTab = {
  opacity: 1,
};

export const STab = styled.button<STabProps>`
  ${({ theme }) => theme.components.tabs.tab.STab}
`;
