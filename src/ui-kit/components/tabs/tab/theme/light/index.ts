import { css } from "styled-components/macro";
import { NEUTRAL_90, NEUTRAL_30, PRIMARY_60 } from "@/ui-kit/constants/colors";
import { STabProps } from "../../types";


const STab = css<STabProps>`
  font-family: "Menlo", serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_90};
  width: 100%;
  padding: 10px 0;
  background-color: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border-bottom: 1px solid ${NEUTRAL_30};
  transition: .2s color ease-in;
  
  ${({ active }) =>
          active &&
          css`
            color: ${PRIMARY_60};
            font-weight: 700;
            border-top: 1px solid ${NEUTRAL_30};
            border-right: 1px solid ${NEUTRAL_30};
            border-left: 1px solid ${NEUTRAL_30};
            border-bottom: none;
          `}
  ${({ active, inactiveStyle }) => !active && inactiveStyle}
  &:hover {
    color: ${PRIMARY_60};
    transition: .2s color ease-in;
  }
`;

export const tab = {
  STab,
};
