import { css } from "styled-components/macro";
import { DARK_LAVA, PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { ContentProps } from "../../types";


const SCollapsible = css`
  margin: 10px;
  width: 100%;
`;

const CHeader = css`
  padding: 5px 0;
  cursor: pointer;
  transition: .2s opacity ease-in;

  &:hover {
    opacity: .8;
    transition: .2s opacity ease-in;
  }
`;

const CTitle = css`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${PLUMP_PURPLE};
`;

const CSubtitle = css`
  font-weight: 350;
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_LAVA};
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

export const collapsible = {
  SCollapsible,
  CHeader,
  CTitle,
  CSubtitle,
  Content,
  ResizeContainer,
  ContentContainer,
};
