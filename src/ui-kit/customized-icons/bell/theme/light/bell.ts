import { css } from "styled-components/macro";
import { SNOW } from "../../../../constants/colors";


const BellIconWrapper = css`
  position: relative;
`

const Count = css`
  padding: 3px;
  background: #E12D39;
  border-radius: 5px;
  font-family: 'Menlo', serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: ${SNOW};
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 999999;
`

export const bellIcon = {
  BellIconWrapper,
  Count,
}
