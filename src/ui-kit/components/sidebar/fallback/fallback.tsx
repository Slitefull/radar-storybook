import { FC, memo } from "react"
import { LinksWrapper, LogosWrapper, SFallback } from "@/ui-kit/components/sidebar/styled";
import IconFallback from "@/ui-kit/customized-icons/fallback/fallback";


const SidebarFallback: FC = memo((): JSX.Element => {
  return (
    <SFallback>
      <LogosWrapper>
        <IconFallback size={47}/>
      </LogosWrapper>
      <LinksWrapper>
        <IconFallback size={35}/>
        <IconFallback size={35}/>
        <IconFallback size={35}/>
        <IconFallback size={35}/>
        <IconFallback size={35}/>
        <IconFallback size={35}/>
        <IconFallback size={35}/>
      </LinksWrapper>
    </SFallback>
  )
})

export default SidebarFallback;
