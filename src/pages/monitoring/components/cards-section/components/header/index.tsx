import { FC, memo } from 'react';
import SortBy from './sort-by';
import Tags from "./tags";
import TotalChanges from "./total-changes";
import ChangesSince from './changes-since';

import { Column, Row } from "@/global.css";


const CardsSectionHeader: FC = memo((): JSX.Element => {
  return (
    <Row width={"100%"}>
      <Column
        gap={25}
        margin={"0"}
        width={"50%"}
      >
        <ChangesSince/>
        <TotalChanges/>
      </Column>
      <Column
        gap={25}
        margin={"0"}
        width={"50%"}
        align={"end"}
      >
        <SortBy/>
        <Tags/>
      </Column>
    </Row>
  );
});

export default CardsSectionHeader;
