import styled from "styled-components";
import { css } from "styled-components/macro";

import { STabPanelProps } from "./types";


export const STabPanel = styled.div<STabPanelProps>`
  ${({ theme }) => css`${theme.components.tabPanel.STabPanel}`}
`;
