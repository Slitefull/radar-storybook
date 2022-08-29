import { css } from "styled-components/macro";
import { KSU_PURPLE_LIGHT } from "@/ui-kit/constants/colors";


const SFooter = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 50px;
  gap: 0 15px;
  align-items: center;
  backdrop-filter: blur(5px);
  background: ${KSU_PURPLE_LIGHT};
`

export const footer = {
  SFooter,
}
