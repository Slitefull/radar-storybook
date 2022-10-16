import { FC, memo } from "react";
import FireIcon from "@/ui-kit/customized-icons/fire/fire";

import { SHotRating } from "./styled";


const HotRating: FC = memo((): JSX.Element => {
  return (
    <SHotRating>
      <FireIcon size={13}/>
    </SHotRating>
  );
})

export default HotRating;
