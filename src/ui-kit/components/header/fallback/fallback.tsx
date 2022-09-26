import { FC, memo } from "react"
import ColoredTextFallback from "@/ui-kit/components/text/colored/fallback/fallback";
import DropdownFallback from "@/ui-kit/components/dropdowns/dropdown/fallback/fallback";
import LinkFallback from "@/ui-kit/components/buttons/link/fallback/fallback";
import IconFallback from "@/ui-kit/customized-icons/fallback/fallback";

import { HeaderWrapper, LeftSide, RightSide } from "../styled";


const HeaderFallback: FC = memo((): JSX.Element => {
  return (
    <HeaderWrapper>
      <LeftSide>
        <ColoredTextFallback width={265}/>
        <DropdownFallback/>
        <LinkFallback/>
      </LeftSide>

      <RightSide>
        <IconFallback/>
        <IconFallback/>
        <ColoredTextFallback width={90}/>
      </RightSide>
    </HeaderWrapper>
  )
})

export default HeaderFallback;
