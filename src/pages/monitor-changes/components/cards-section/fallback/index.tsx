import { FC, Fragment, memo } from "react"
import DropdownFallback from "@/ui-kit/components/dropdowns/dropdown/fallback";
import SwitcherFallback from "@/ui-kit/components/inputs/switcher/fallback";
import RoundedButtonFallback from "@/ui-kit/components/buttons/rounded-arrow/fallback";
import IconFallback from "@/ui-kit/customized-icons/fallback";
import MonitorChangesCardFallback from "@/ui-kit/components/cards/monitor-changes/fallback";

import { CardsSectionHeaderWrapper, FallbackRow, HeaderSideWrapper, SCardsSectionFallback } from "../../../styled";


const CardsSectionFallback: FC = memo((): JSX.Element => (
  <SCardsSectionFallback>
    <Fragment>
      <CardsSectionHeaderWrapper>
        <HeaderSideWrapper>
          <DropdownFallback withLabel animate speed={1}/>
          <SwitcherFallback withLabel animate speed={1}/>
          <IconFallback animate speed={1}/>
        </HeaderSideWrapper>
        <HeaderSideWrapper>
          <DropdownFallback withLabel animate speed={1}/>
          <RoundedButtonFallback animate speed={1}/>
          <RoundedButtonFallback animate speed={1}/>
        </HeaderSideWrapper>
      </CardsSectionHeaderWrapper>
    </Fragment>
    <FallbackRow>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
      <MonitorChangesCardFallback animate speed={1}/>
    </FallbackRow>
  </SCardsSectionFallback>
))

export default CardsSectionFallback;
