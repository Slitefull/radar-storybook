import { FC, memo } from "react";
import StarIcon from "@/ui-kit/customized-icons/star/star";

import { SFavoriteRating } from "./styled";


const FavoriteRating: FC = memo((): JSX.Element => {
  return (
    <SFavoriteRating>
      <StarIcon size={15}/>
    </SFavoriteRating>
  );
})

export default FavoriteRating;
