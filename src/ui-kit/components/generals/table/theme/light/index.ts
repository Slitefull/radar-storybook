import { css } from "styled-components/macro";
import { NEUTRAL_90, NEUTRAL_70, NEUTRAL_20, NEUTRAL_100, NEUTRAL_10, NEUTRAL_00 } from "@/ui-kit/constants/colors";


const STable = css`
  background: ${NEUTRAL_00};
  border: 1px solid ${NEUTRAL_20};
  border-radius: 10px;
  width: inherit;
`;

const THeader = css`
  background: ${NEUTRAL_00};
  border-bottom: 1px solid ${NEUTRAL_70};
  border-radius: 10px 10px 0 0;
  padding: 20px;
`;

const TBody = css`
`;

const TFooter = css`
  margin: 0 20px;
  padding: 20px 0;
  border-top: 1px solid ${NEUTRAL_20};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const THeaderRow = css`
  display: flex;
  width: 100% !important;
  min-height: 30px;
  justify-content: space-between;
`;

const THeaderElement = css`
  font-size: 14px;
  font-family: "Menlo", serif;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_100};
  align-items: center;
  display: flex !important;
  gap: 10px;
`;

const TRow = css`
  width: 100% !important;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  word-break: break-all;
  transition: 0.2s background-color ease-in;

  &:hover {
    transition: 0.2s background-color ease-in;
    background-color: ${NEUTRAL_10};
  }
`;

const TCell = css`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_90};
`;

const DropdownWrapper = css` 
  position: absolute;
  left: 0;
`;

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
};
