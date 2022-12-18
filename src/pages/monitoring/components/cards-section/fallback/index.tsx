import { FC, Fragment, memo } from "react"
import DropdownFallback from "@/ui-kit/components/controls/dropdown/fallback";
import SwitcherFallback from "@/ui-kit/components/controls/switcher/fallback";
import RoundedButtonFallback from "@/ui-kit/components/buttons/rounded-arrow/fallback";
import IconFallback from "@/ui-kit/customized-icons/fallback";
import MonitorChangesCardFallback from "@/ui-kit/components/cards/monitor-changes/fallback";

import { Column, Row } from "@/global.css";


const CardsSectionFallback: FC = memo((): JSX.Element => (
  <Column>
    <Fragment>
      <Row>
        <Row>
          <DropdownFallback withLabel animate speed={1}/>
          <SwitcherFallback withLabel animate speed={1}/>
          <IconFallback animate speed={1}/>
        </Row>
        <Row>
          <DropdownFallback withLabel animate speed={1}/>
          <RoundedButtonFallback animate speed={1}/>
          <RoundedButtonFallback animate speed={1}/>
        </Row>
      </Row>
    </Fragment>
    <Row>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
    </Row>
  </Column>
))

export default CardsSectionFallback;
