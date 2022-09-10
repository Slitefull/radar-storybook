import { FC, Fragment, memo } from 'react';
import DropdownFallback from "@/ui-kit/components/dropdowns/dropdown/fallback/fallback";
import TextInputFallback from "@/ui-kit/components/inputs/text/fallback/fallback";
import TableFallback from "@/ui-kit/components/table/fallback/fallback";

import { SMonitorTable, TControls, TDropdowns } from "../../../styled";


const MonitorTableFallback: FC = memo((): JSX.Element => {
  return (
    <SMonitorTable>
      <TControls>
        <TDropdowns>
          <DropdownFallback animate={false}/>
          <DropdownFallback animate={false}/>
          <DropdownFallback animate={false}/>
          <DropdownFallback animate={false}/>
        </TDropdowns>
        <Fragment>
          <TextInputFallback animate={false}/>
        </Fragment>
      </TControls>
      <TableFallback animate={false}/>
    </SMonitorTable>
  );
});

export default MonitorTableFallback;
