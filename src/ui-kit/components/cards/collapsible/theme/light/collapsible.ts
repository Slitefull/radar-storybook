import { css } from "styled-components/macro";


const SCollapsible = css`
  margin: 10px;
  border-bottom: 1px solid #E8E6E1;
`

const CHeader = css`
  padding: 15px 0;
  cursor: pointer;
  transition: .2s opacity ease-in;
  
  &:hover {
    opacity: .8;
    transition: .2s opacity ease-in;
  }
`

const CTitle = css`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #653CAD;
`

const CSubtitle = css`
  font-weight: 350;
  font-size: 14px;
  line-height: 18px;
  color: #423D33;
`

const Content = css`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`

const ResizeContainer = css``

const ContentContainer = css`
  padding: 15px 0;
`

export const collapsibleCard = {
  SCollapsible,
  CHeader,
  CTitle,
  CSubtitle,
  Content,
  ResizeContainer,
  ContentContainer,
}
