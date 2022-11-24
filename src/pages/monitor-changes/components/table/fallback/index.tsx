import { FC, Fragment, memo } from 'react';
import DropdownFallback from "@/ui-kit/components/dropdowns/dropdown/fallback";
import TextInputFallback from "@/ui-kit/components/inputs/text/fallback";
import TableFallback from "@/ui-kit/components/table/fallback";

import { SMonitorTable, TControls, TDropdowns } from "../../../styled";


const MonitorTableFallback: FC = memo((): JSX.Element => {
  return (
    <SMonitorTable>
      <TControls>
        <TDropdowns>
          <DropdownFallback animate speed={1}/>
          <DropdownFallback animate speed={1}/>
          <DropdownFallback animate speed={1}/>
          <DropdownFallback animate speed={1}/>
        </TDropdowns>
        <Fragment>
          <TextInputFallback animate speed={1}/>
        </Fragment>
      </TControls>
      <TableFallback animate speed={1}/>
    </SMonitorTable>
  );
});

export default MonitorTableFallback;
