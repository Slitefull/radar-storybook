import { FC, memo } from "react"
import ColoredTextFallback from "@/ui-kit/components/text/colored/fallback";
import IconFallback from "@/ui-kit/customized-icons/fallback";

import { LeftSide, RightSide } from "../../../styled";
import { Row } from "@/global.css";


const ManageLayoutFallback: FC = memo((): JSX.Element => {
  return (
    <Row
      gap={0}
      padding={"0"}
      margin={"0"}
      width={"100%"}
      justify={"space-between"}
    >
      <LeftSide>
        <ColoredTextFallback width={265} animate speed={1}/>
      </LeftSide>

      <RightSide>
        <IconFallback animate speed={1}/>
        <IconFallback animate speed={1}/>
        <ColoredTextFallback width={90} animate speed={1}/>
      </RightSide>
    </Row>
  )
})

export default ManageLayoutFallback;
