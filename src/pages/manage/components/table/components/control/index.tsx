import { FC, memo } from 'react';
import Radios from './components/radios';
import SearchDomain from './components/search-domain';

import { Row } from "@/global.css";


const TableControl: FC = memo((): JSX.Element => {
  return (
    <Row
      align={"center"}
      justify={"space-between"}
      width={"100%"}
    >
      <SearchDomain/>
      <Radios/>
    </Row>
  );
});

export default TableControl;