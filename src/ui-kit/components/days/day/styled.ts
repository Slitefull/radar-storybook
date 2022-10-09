import styled from "styled-components";
import { css } from "styled-components/macro";

import { SDayBulletProps } from "./types";


export const SDayBullet = styled.div<SDayBulletProps>` && {
  ${({ theme }) => css`${theme.components.dayBullet.SDayBullet}`}
}`
