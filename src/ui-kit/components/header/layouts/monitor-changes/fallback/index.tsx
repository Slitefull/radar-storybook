import { FC, memo } from "react"
import ColoredTextFallback from "@/ui-kit/components/text/colored/fallback";
import DropdownFallback from "@/ui-kit/components/dropdowns/dropdown/fallback";
import LinkFallback from "@/ui-kit/components/buttons/link/fallback";
import IconFallback from "@/ui-kit/customized-icons/fallback";

import { LeftSide, RightSide } from "../../../styled";
import { Row } from "@/global.css";


const MonitorChangesLayoutFallback: FC = memo((): JSX.Element => {
  return (
    <Row gap={0} padding={"0"} margin={"0"}>
      <LeftSide>
        <ColoredTextFallback width={265} animate speed={1}/>
        <DropdownFallback animate speed={1}/>
        <LinkFallback animate speed={1}/>
      </LeftSide>

      <RightSide>
        <IconFallback animate speed={1}/>
        <IconFallback animate speed={1}/>
        <ColoredTextFallback width={90} animate speed={1}/>
      </RightSide>
    </Row>
  )
})

export default MonitorChangesLayoutFallback;
