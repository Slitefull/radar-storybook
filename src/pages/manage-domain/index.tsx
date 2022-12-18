import { FC, memo, ReactNode } from 'react';
import { useRecoilValue } from "recoil";
import { selectedLayoutSelector } from "@/entity/selectors/manage-domain/layout-type";
import PageContainer from "@/ui-kit/components/containers/simple";
import Options from "./components/options";
import Settings from "@/pages/manage-domain/layouts/settings";
import MonitoredUrls from "@/pages/manage-domain/layouts/monitored-urls";

import { LayoutTypes } from '@/entity/types/manage-domain';
import { Column } from '@/global.css';


const LayoutsRecord: Record<LayoutTypes, ReactNode> = {
  [LayoutTypes.Settings]: <Settings/>,
  [LayoutTypes.MonitoredURLs]: <MonitoredUrls/>,
};

const ManageDomain: FC = memo((): JSX.Element => {
  const selectedLayout = useRecoilValue(selectedLayoutSelector);

  return (
    <PageContainer>
      <Column width={"100%"}>
        <Options/>
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