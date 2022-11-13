import { FC, memo } from 'react';
import PageContainer from '@/ui-kit/components/page-container/simple/simple';
import GeneralInfo from "./components/general-info";
import ManageTable from "@/pages/manage/components/table/table";

import { Column } from '@/global.css';


const Manage: FC = memo((): JSX.Element => {
  return (
    <PageContainer>
      <Column width={"100%"}>
        <GeneralInfo/>
        <ManageTable/>
      </Column>
    </PageContainer>
  );
});

export default Manage;