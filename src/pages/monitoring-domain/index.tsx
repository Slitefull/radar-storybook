import { FC, memo, ReactNode } from 'react';
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { MONITORING_PAGE } from "@/constants/routes";
import { selectedLayoutSelector } from "@/entity/selectors/monitoring-domain/layout-type";
import faker from "faker";
import Breadcrumb from "@/ui-kit/components/breadcrumbs/with-arrow";
import ChangesSince from "./components/changes-since";
import ControlLayouts from "./components/control-layouts";
import ListView from "./components/layouts/list-view";
import URLView from "./components/layouts/url-view";
import VisualReport from "./components/layouts/visual-report";
import CrawlHistory from "./components/layouts/crawl-history";

import { LayoutTypes } from "@/entity/types/monitoring-domain";
import { Column, Row } from "@/global.css";


const LayoutsRecord: Record<LayoutTypes, ReactNode> = {
  [LayoutTypes.ListView]: <ListView/>,
  [LayoutTypes.URLView]: <URLView/>,
  [LayoutTypes.VisualReport]: <VisualReport/>,
  [LayoutTypes.CrawlHistory]: <CrawlHistory/>,
};

const MonitoringDomain: FC = memo((): JSX.Element => {
  const { id } = useParams();
  const selectedLayout = useRecoilValue(selectedLayoutSelector);

  return (
    <Column width={"100%"} gap={30}>
      <Breadcrumb
        name={id!}
        backLink={MONITORING_PAGE}
        openLink={MONITORING_PAGE}
        lastCrawl={faker.datatype.datetime()}
        nextCrawl={faker.datatype.datetime()}
        withButton
      />
      <Row
        align={"center"}
        justify={"space-between"}
        width={"100%"}
      >
        <ChangesSince/>
        <ControlLayouts/>
      </Row>
      {LayoutsRecord[selectedLayout]}
    </Column>
  );
});

export default MonitoringDomain;
