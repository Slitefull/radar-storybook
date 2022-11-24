import { FC, memo, ReactNode } from 'react';
import { useRecoilValue } from "recoil";
import { selectedLayoutSelector } from "@/entity/selectors/manage-domain/layout-type";
import PageContainer from "@/ui-kit/components/page-container/simple";
import Breadcrumb from "./components/breadcrumb";
import Settings from "@/pages/manage-domain/layouts/settings";
import MonitoredUrls from "@/pages/manage-domain/layouts/monitored-urls";

import { Column } from '@/global.css';


enum LayoutTypes {
  settings = "domains",
  monitoredURLs = "keywords",
}

const LayoutsRecord: Record<LayoutTypes, ReactNode> = {
  [LayoutTypes.settings]: <Settings/>,
  [LayoutTypes.monitoredURLs]: <MonitoredUrls/>,
};

const ManageDomain: FC = memo((): JSX.Element => {
  const selectedLayout = useRecoilValue(selectedLayoutSelector);

  return (
    <PageContainer>
      <Column width={"100%"}>
        <Breadcrumb/>
        <Column
          margin={"50px 0 0 0"}
          width={"100%"}
        >
          {LayoutsRecord[selectedLayout]}
        </Column>
      </Column>
    </PageContainer>
  );
});

export default ManageDomain;