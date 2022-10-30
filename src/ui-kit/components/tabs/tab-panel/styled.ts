import styled from "styled-components";

import { STabPanelProps } from "./types";


export const STabPanel = styled.div<STabPanelProps>`
  ${({ theme }) => theme.components.tabs.tabPanel.STabPanel}
`;
