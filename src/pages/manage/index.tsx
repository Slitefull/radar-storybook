import { FC, memo } from 'react';
import loadable from "@loadable/component";
import PageContainer from '@/ui-kit/components/containers/simple';
import GeneralInfoFallback from "@/pages/manage/components/general-info/fallback";

import { Column } from '@/global.css';


const ManageTable = loadable(() => import("./components/table"));

const GeneralInfo = loadable(() => import("./components/general-info"), {
  fallback: <GeneralInfoFallback/>
});

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