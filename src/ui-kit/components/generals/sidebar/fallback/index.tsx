import { FC, memo } from "react"
import IconFallback from "@/ui-kit/customized-icons/fallback";

import { SFallback } from "@/ui-kit/components/generals/sidebar/styled";
import { Column } from "@/global.css";


const SidebarFallback: FC = memo((): JSX.Element => {
  return (
    <SFallback>
      <Column gap={0}>
        <IconFallback size={47} animate speed={1}/>
      </Column>
      <IconFallback size={35} animate speed={1}/>
      <IconFallback size={35} animate speed={1}/>
      <IconFallback size={35} animate speed={1}/>
      <IconFallback size={35} animate speed={1}/>
      <IconFallback size={35} animate speed={1}/>
      <IconFallback size={35} animate speed={1}/>
      <IconFallback size={35} animate speed={1}/>
    </SFallback>
  )
})

export default SidebarFallback;
