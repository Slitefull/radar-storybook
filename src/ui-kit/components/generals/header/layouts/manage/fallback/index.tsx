import { FC, memo } from "react"
import TextFallback from "@/ui-kit/components/typography/text/fallback";
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
        <TextFallback width={265} animate speed={1}/>
      </LeftSide>

      <RightSide>
        <IconFallback animate speed={1}/>
        <IconFallback animate speed={1}/>
        <TextFallback width={90} animate speed={1}/>
      </RightSide>
    </Row>
  )
})

export default ManageLayoutFallback;
