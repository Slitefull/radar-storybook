import { FC, Fragment, memo } from 'react';
import DropdownFallback from "@/ui-kit/components/controls/dropdown/fallback";
import TextInputFallback from "@/ui-kit/components/controls/text/fallback";
import TableFallback from "@/ui-kit/components/generals/table/fallback";
import { Column, Row } from "@/global.css";


const MonitorTableFallback: FC = memo((): JSX.Element => {
  return (
    <Column>
      <Row>
        <Row>
          <DropdownFallback animate speed={1}/>
          <DropdownFallback animate speed={1}/>
          <DropdownFallback animate speed={1}/>
          <DropdownFallback animate speed={1}/>
        </Row>
        <Fragment>
          <TextInputFallback animate speed={1}/>
        </Fragment>
      </Row>
      <TableFallback animate speed={1}/>
    </Column>
  );
});

export default MonitorTableFallback;
