import { css } from "styled-components/macro";
import { DARK_LAVA, LIGHT_GREY, PLUMP_PURPLE } from "@/ui-kit/constants/colors";
import { STabProps } from "../../types";


export const inactiveTab = {
  opacity: 0.65
};

const STab = css<STabProps>`
  font-family: 'Menlo', serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${DARK_LAVA};
  width: 100%;
  padding: 10px 0;
  background-color: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border-bottom: 1px solid ${LIGHT_GREY};

  ${({ active }) =>
          active &&
          css`
            color: ${PLUMP_PURPLE};
            font-weight: 700;
            border-top: 1px solid ${LIGHT_GREY};
            border-right: 1px solid ${LIGHT_GREY};
            border-left: 1px solid ${LIGHT_GREY};
            border-bottom: none;
          `}
  ${({ active, inactiveStyle }) => !active && inactiveStyle}
`

export const tab = {
  STab,
}
