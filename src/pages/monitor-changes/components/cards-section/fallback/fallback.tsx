import { FC, Fragment, memo } from "react"
import DropdownFallback from "@/ui-kit/components/dropdowns/dropdown/fallback/fallback";
import SwitcherFallback from "@/ui-kit/components/inputs/switcher/fallback/fallback";
import RoundedButtonFallback from "@/ui-kit/components/buttons/rounded-arrow/fallback/fallback";
import IconFallback from "@/ui-kit/customized-icons/fallback/fallback";
import MonitorChangesCardFallback from "@/ui-kit/components/cards/monitor-changes/fallback/fallback";

import { CardsSectionHeaderWrapper, FallbackRow, HeaderSideWrapper, SCardsSectionFallback } from "../../../styled";


const CardsSectionFallback: FC = memo((): JSX.Element => (
  <SCardsSectionFallback>
    <Fragment>
      <CardsSectionHeaderWrapper>
        <HeaderSideWrapper>
          <DropdownFallback withLabel animate={false}/>
          <SwitcherFallback withLabel animate={false}/>
          <IconFallback/>
        </HeaderSideWrapper>
        <HeaderSideWrapper>
          <DropdownFallback withLabel animate={false}/>
          <RoundedButtonFallback animate={false}/>
          <RoundedButtonFallback animate={false}/>
        </HeaderSideWrapper>
      </CardsSectionHeaderWrapper>
    </Fragment>
    <FallbackRow>
      <MonitorChangesCardFallback animate={false}/>
      <MonitorChangesCardFallback animate={false}/>
      <MonitorChangesCardFallback animate={false}/>
      <MonitorChangesCardFallback animate={false}/>
      <MonitorChangesCardFallback animate={false}/>
      <MonitorChangesCardFallback animate={false}/>
    </FallbackRow>
  </SCardsSectionFallback>
))

export default CardsSectionFallback;
