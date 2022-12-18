import styled from "styled-components";

import { TopInfoTextProps } from "./types";


export const TopInfoText = styled.p<TopInfoTextProps>`
  ${({ theme }) => theme.components.monitoring.listView.TopInfoText}
`;
