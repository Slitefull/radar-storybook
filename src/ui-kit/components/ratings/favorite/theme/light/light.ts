import { css } from "styled-components/macro";
import { PLUMP_PURPLE, WHITE } from "@/ui-kit/constants/colors";


const SFavoriteRating = css` && {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background: ${WHITE};
  border: 1px solid ${PLUMP_PURPLE};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  cursor: pointer;
}`

export const favoriteRating = {
  SFavoriteRating,
}
