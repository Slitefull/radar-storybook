import { css } from "styled-components/macro";
import { STabPanelProps } from "@/ui-kit/components/tabs/tab-panel/types";


const STabPanel = css<STabPanelProps>`
  display: ${({ active }) => (active ? "flex" : "none")};
  font-size: 4rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const tabPanel = {
  STabPanel,
};
