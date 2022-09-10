import { css } from "styled-components/macro";
import { DARK_LAVA, EBONY, PLATINUM, RAISIN_BLACK, SNOW, WHITE } from "@/ui-kit/constants/colors";


const STable = css`
  background: ${WHITE};
  border: 1px solid ${PLATINUM};
  border-radius: 10px;
  width: inherit;
`

const THeader = css`
  background: ${WHITE};
  border-bottom: 1px solid ${EBONY};
  border-radius: 10px 10px 0 0;
  padding: 20px;
`

const TBody = css`
`

const TFooter = css`
  margin: 0 20px;
  padding: 20px 0;
  border-top: 1px solid ${PLATINUM};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const THeaderRow = css`
  display: flex;
  width: 100% !important;
  justify-content: space-between;
`

const THeaderElement = css`
  font-size: 14px;
  font-family: 'Menlo', serif;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${RAISIN_BLACK};
`

const TRow = css`
  width: 100% !important;
  justify-content: space-between;
  padding: 20px;
  word-break: break-all;

  &:hover {
    background: ${SNOW};
  }
`

const TCell = css`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
`

const DropdownWrapper = css` 
  position: absolute;
  left: 0;
`

export const table = {
  STable,
  THeader,
  TBody,
  TFooter,
  THeaderRow,
  THeaderElement,
  TRow,
  TCell,
  DropdownWrapper,
}
