import { css } from "styled-components/macro";

import { ContentProps } from "../../types";


const SCollapsible = css`
  margin: 10px;
  width: 100%;
`;

const CHeader = css`
  padding: 5px 0;
`;

const Content = css<ContentProps>`
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  overflow: ${({ isOpen }) => isOpen ? "inherit" : "hidden"};
  transition: height .2s ease-in-out, overflow .2s ease-in, opacity .5s;
`

const ResizeContainer = css``;

const ContentContainer = css`
  padding: 15px 0;
`;

export const radioCollapsible = {
  SCollapsible,
  CHeader,
  Content,
  ResizeContainer,
  ContentContainer,
};
